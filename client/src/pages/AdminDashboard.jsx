// components/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogCardSchema } from "../schemas/blogCardSchema";
import { toast } from "sonner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AdminDashboard({ darkTheme }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [editorMode, setEditorMode] = useState("rich");
  const [scheduledBlogs, setScheduledBlogs] = useState([]);
  const [grammarSuggestions, setGrammarSuggestions] = useState([]);

  const categories = [
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
    "North America",
    "South America",
  ];

  const quillModules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        ["link", "image", "blockquote", "code-block"],
        ["clean"],
      ],
    },
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "align",
    "link",
    "image",
    "blockquote",
    "code-block",
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(blogCardSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      category: "",
      imageUrl: "",
      read: 0,
      scheduledAt: "",
    },
  });

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/admin`,
          { withCredentials: true }
        );
        if (res.data) setData(res.data);
      } catch (err) {
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          navigate("/login");
        } else {
          setError("Something went wrong.");
        }
      }
    };
    fetchAdminData();
  }, [navigate]);

  // ✅ Scheduled blogs interval
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setScheduledBlogs((prevBlogs) =>
        prevBlogs.filter((blog) => {
          const scheduledTime = new Date(blog.scheduledAt);
          if (now >= scheduledTime) {
            toast.success(`✅ Blog "${blog.title}" has been published! 🎉`);
            return false;
          }
          return true;
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Grammar Check with LanguageTool API
  const handleGrammarCheck = async () => {
    try {
      const content = getValues("content");
      if (!content) {
        toast.error("❌ Please write some content first!");
        return;
      }

      const res = await fetch("https://api.languagetool.org/v2/check", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          text: content,
          language: "en-US",
        }),
      });

      const data = await res.json();
      setGrammarSuggestions(data.matches);

      if (data.matches.length === 0) {
        toast.success("✅ No grammar or spelling issues found!");
      } else {
        toast.info("⚡ Grammar suggestions found!");
      }
    } catch (error) {
      toast.error("❌ Grammar check failed!");
    }
  };

  const onSubmit = async (formData) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/createblog`,
        { ...formData, deletedPost: false },
        { withCredentials: true }
      );

      if (res.status === 200) {
        reset();
        if (formData.scheduledAt) {
          setScheduledBlogs((prev) => [
            ...prev,
            { title: formData.title, scheduledAt: formData.scheduledAt },
          ]);
          toast.info(
            `⏳ Blog "${formData.title}" scheduled for ${new Date(
              formData.scheduledAt
            ).toLocaleString()}`
          );
        } else {
          toast.success("✅ Blog Created Successfully!");
          navigate("/", { state: res.data });
        }
      }
    } catch {
      toast.error("❌ Blog creation failed!");
    }
  };

  return (
    <div
      className={`min-h-screen py-20 px-4 sm:px-10 ${
        darkTheme ? "bg-[#121212] text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex gap-6 mb-6">
            <Link
              to="/deletepage"
              className="text-red-500 hover:underline font-medium"
            >
              Delete Blogs
            </Link>
            <Link
              to="/editblog"
              className="text-blue-500 hover:underline font-medium"
            >
              Edit Blog
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>

          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded-md mb-6">
              {error}
            </div>
          )}

          {data ? (
            <>
              {/* Admin Info */}
              <div
                className={`p-5 rounded-xl mb-6 shadow-md ${
                  darkTheme ? "bg-[#1E1E1E]" : "bg-white"
                }`}
              >
                <p className="mb-2">
                  <strong>Email:</strong> {data.email}
                </p>
                <p>
                  <strong>Username:</strong> {data.username}
                </p>
              </div>

              {/* Create Blog Form */}
              <div
                className={`p-6 rounded-xl shadow-md ${
                  darkTheme ? "bg-[#1E1E1E]" : "bg-white"
                }`}
              >
                <h2 className="text-2xl font-semibold mb-6">Create Blog</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Title */}
                  <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                      className="w-full rounded-md border px-3 py-3"
                      placeholder="Blog Title"
                      {...register("title")}
                    />
                    {errors.title && (
                      <p className="text-red-500 text-sm">
                        {errors.title.message}
                      </p>
                    )}
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="block mb-1 font-medium">Image URL</label>
                    <input
                      className="w-full rounded-md border px-3 py-3"
                      placeholder="https://example.com/image.jpg"
                      {...register("imageUrl")}
                    />
                    {errors.imageUrl && (
                      <p className="text-red-500 text-sm">
                        {errors.imageUrl.message}
                      </p>
                    )}
                  </div>

                  {/* Read Time */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Read Time (minutes)
                    </label>
                    <input
                      className="w-full rounded-md border px-3 py-3"
                      type="number"
                      placeholder="5"
                      {...register("read", { valueAsNumber: true })}
                    />
                    {errors.read && (
                      <p className="text-red-500 text-sm">
                        {errors.read.message}
                      </p>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <select
                      className="w-full rounded-md border px-3 py-3"
                      {...register("category")}
                    >
                      <option value="">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="text-red-500 text-sm">
                        {errors.category.message}
                      </p>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Short Description
                    </label>
                    <input
                      className="w-full rounded-md border px-3 py-3"
                      placeholder="Short summary of the blog..."
                      {...register("description")}
                    />
                    {errors.description && (
                      <p className="text-red-500 text-sm">
                        {errors.description.message}
                      </p>
                    )}
                  </div>

                  {/* Schedule Date */}
                  <div>
                    <label className="block mb-1 font-medium">
                      Schedule Publish Date (optional)
                    </label>
                    <input
                      type="datetime-local"
                      className="w-full rounded-md border px-3 py-3"
                      {...register("scheduledAt")}
                    />
                  </div>

                  {/* Editor Mode */}
                  <div className="flex gap-6 items-center">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={editorMode === "rich"}
                        onChange={() => setEditorMode("rich")}
                      />
                      <span>Rich Text Editor</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={editorMode === "plain"}
                        onChange={() => setEditorMode("plain")}
                      />
                      <span>Plain Text Mode</span>
                    </label>
                  </div>

                  {/* Blog Content */}
                  <div>
                    <label className="block mb-2 font-medium">Blog Content</label>
                    {editorMode === "rich" ? (
                      <Controller
                        name="content"
                        control={control}
                        render={({ field }) => (
                          <ReactQuill
                            className="w-full min-h-[200px] rounded-md"
                            theme="snow"
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Write your blog here..."
                            modules={quillModules}
                            formats={quillFormats}
                          />
                        )}
                      />
                    ) : (
                      <textarea
                        className="w-full min-h-[200px] rounded-md border px-3 py-3 resize-none"
                        placeholder="Write your blog here..."
                        {...register("content")}
                      />
                    )}
                    {errors.content && (
                      <p className="text-red-500 text-sm">
                        {errors.content.message}
                      </p>
                    )}
                  </div>

                  {/* Grammar Check Button */}
                  <button
                    type="button"
                    onClick={handleGrammarCheck}
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md shadow-md mr-4"
                  >
                    Check Grammar
                  </button>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md"
                  >
                    {isSubmitting ? "Creating..." : "Create Blog"}
                  </button>
                </form>

                {/* Grammar Suggestions */}
                {grammarSuggestions.length > 0 && (
                  <div className="mt-6 p-4 border rounded bg-gray-100">
                    <h3 className="font-semibold text-black">Grammar Suggestions:</h3>
                    <ul className="list-disc ml-5 text-black">
                      {grammarSuggestions.map((s, i) => (
                        <li className="text-black" key={i}>
                          {s.message} → Suggested:{" "}
                          <span className="text-black">
                            {s.replacements.map((r) => r.value).join(", ")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Right Section (Profile) */}
        {data?.imageUrl && (
          <div className="flex justify-center lg:justify-start">
            <div
              className={`p-6 rounded-xl shadow-md ${
                darkTheme ? "bg-[#1E1E1E]" : "bg-white"
              }`}
            >
              <img
                className="w-28 h-28 object-cover rounded-full mx-auto"
                src={data.imageUrl}
                alt="Admin"
              />
              <p className="text-center mt-3 font-medium">{data.username}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
