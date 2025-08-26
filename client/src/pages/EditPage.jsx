import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { blogCardSchema } from "../schemas/blogCardSchema";
import { toast, Toaster } from "sonner";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditPage({ darkTheme }) {
  const { id } = useParams();
  const [editorMode, setEditorMode] = useState("rich");
  const navigate = useNavigate();

  const categories = [
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
    "North America",
    "South America",
  ];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
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

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image", "blockquote", "code-block"],
      ["clean"],
    ],
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

  // ✅ Fetch blog data and prefill form
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/getblog/${id}`
        );
        if (res.data?.blog) {
          reset({
            ...res.data.blog,
            scheduledAt: res.data.blog.scheduledAt
              ? new Date(res.data.blog.scheduledAt).toISOString().slice(0, 16)
              : "",
          });
        }
      } catch (error) {
        console.error("Error fetching blog", error);
        toast.error("Failed to load blog data");
      }
    };
    fetchBlog();
  }, [id, reset]);

  // ✅ Handle form submit
  const onSubmit = async (formData) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/edit/${id}`,
        {
          ...formData,
          deletedPost: false, // keep consistent with create
        },
        { withCredentials: true }
      );
      if (res.status === 200) {
        toast.success("Blog updated successfully!");
        setTimeout(() => navigate(`/blog/${id}`), 1500);
      }
    } catch (error) {
      console.error("Error updating blog", error);
      toast.error("Error updating blog!");
    }
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <div
        className={`py-28 sm:px-10 px-2 ${
          darkTheme ? "bg-[#1C1C1C] text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-2xl font-bold mb-6">Edit Blog</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
          {/* Title */}
          <input
            className="sm:w-96 w-full rounded-md border border-black px-3 py-3"
            placeholder="Blog Title"
            {...register("title")}
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}

          {/* Image URL */}
          <input
            className="sm:w-96 w-full rounded-md border border-black px-3 py-3"
            placeholder="Image URL"
            {...register("imageUrl")}
          />
          {errors.imageUrl && <p className="text-red-500">{errors.imageUrl.message}</p>}

          {/* Read Time */}
          <input
            className="sm:w-96 w-full rounded-md border border-black px-3 py-3"
            type="number"
            placeholder="Read time in minutes"
            {...register("read", { valueAsNumber: true })}
          />
          {errors.read && <p className="text-red-500">{errors.read.message}</p>}

          {/* Category */}
          <select
            className="sm:w-96 w-full rounded-md border border-black px-3 py-3"
            {...register("category")}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-500">{errors.category.message}</p>}

          {/* Description */}
          <input
            className="sm:w-96 w-full rounded-md border border-black px-3 py-3"
            placeholder="Short description"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}

          {/* ✅ Schedule Date */}
          <input
            type="datetime-local"
            className="sm:w-96 w-full rounded-md border border-black px-3 py-3"
            {...register("scheduledAt")}
          />
          {errors.scheduledAt && (
            <p className="text-red-500">{errors.scheduledAt.message}</p>
          )}

          {/* Editor Mode Toggle */}
          <div>
            <label>
              <input
                type="radio"
                checked={editorMode === "rich"}
                onChange={() => setEditorMode("rich")}
              />{" "}
              Rich Text Editor
            </label>
            <label className="ml-4">
              <input
                type="radio"
                checked={editorMode === "plain"}
                onChange={() => setEditorMode("plain")}
              />{" "}
              Plain Text Mode
            </label>
          </div>

          {/* Content */}
          {editorMode === "rich" ? (
            <Controller
              name="content"
              control={control}
              render={({ field }) => (
                <ReactQuill
                  theme="snow"
                  value={field.value || ""}
                  onChange={field.onChange}
                  placeholder="Write your blog here..."
                  modules={quillModules}
                  formats={quillFormats}
                />
              )}
            />
          ) : (
            <textarea
              className="sm:w-96 w-full rounded-md border border-black px-3 py-3 h-64"
              placeholder="Write your blog here..."
              {...register("content")}
            />
          )}
          {errors.content && <p className="text-red-500">{errors.content.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="sm:w-96 w-full rounded-md bg-yellow-700 px-3 py-3 text-white cursor-pointer"
          >
            {isSubmitting ? "Updating Blog..." : "Update Blog"}
          </button>
        </form>
      </div>
    </>
  );
}

export default EditPage;
