import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useLocation } from "react-router-dom";

const DeletePage = ({ darkTheme }) => {
  const [activeBlogs, setActiveBlogs] = useState([]);
  const [deletedBlogs, setDeletedBlogs] = useState([]);
  const [activeTab, setActiveTab] = useState("active");
  const location = useLocation();

  const fetchBlogs = async () => {
    try {
      let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/edit`, {
        withCredentials: true,
      });

      // ✅ separate active & deleted blogs
      setActiveBlogs(res.data.filter((b) => !b.deletedPost));
      setDeletedBlogs(res.data.filter((b) => b.deletedPost));
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  useEffect(() => {
    fetchBlogs();

    // ✅ If user clicked "Recycle Bin" link in dashboard
    const params = new URLSearchParams(location.search);
    if (params.get("tab") === "recycle") {
      setActiveTab("recycle");
    }
  }, [location]);

  const deleteBlog = async (item) => {
    try {
      let res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/delete/${item._id}`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        toast.success("Blog permanently deleted!");
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error deleting blog", error);
      toast.error("Deletion failed!");
    }
  };

  const softdeleteBlog = async (item) => {
    try {
      let res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/softdelete/${item._id}`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        toast.success("Blog moved to Recycle Bin!");
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error soft deleting blog", error);
      toast.error("Soft delete failed!");
    }
  };

  const restoreBlog = async (item) => {
    try {
      let res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/restore/${item._id}`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        toast.success("Blog restored!");
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error restoring blog", error);
      toast.error("Restore failed!");
    }
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <div
        className={`pt-20 sm:px-10 px-2 min-h-screen ${
          darkTheme ? "bg-[#1C1C1C] text-white" : "bg-white"
        }`}
      >
        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveTab("active")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "active"
                ? "bg-blue-500 text-white shadow"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          >
            Active Blogs
          </button>
          <button
            onClick={() => setActiveTab("recycle")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "recycle"
                ? "bg-red-500 text-white shadow"
                : "bg-gray-300 dark:bg-gray-700"
            }`}
          >
            Recycle Bin
          </button>
        </div>

        {/* Active Blogs */}
        {activeTab === "active" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 pb-20">
            {activeBlogs.length > 0 ? (
              activeBlogs.map((item) => (
                <div
                  key={item._id}
                  className={`rounded-xl shadow-md overflow-hidden ${
                    darkTheme ? "bg-[#2A2A2A]" : "bg-gray-50"
                  }`}
                >
                  <img
                    className="w-full h-52 object-cover"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <div className="p-3">
                    <h1 className="truncate font-semibold">{item.title}</h1>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <button
                        onClick={() => deleteBlog(item)}
                        className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white text-sm"
                      >
                        Delete Forever
                      </button>
                      <button
                        onClick={() => softdeleteBlog(item)}
                        className="px-3 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-md text-white text-sm"
                      >
                        Soft Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">
                No active blogs available.
              </p>
            )}
          </div>
        )}

        {/* Recycle Bin */}
        {activeTab === "recycle" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 pb-20">
            {deletedBlogs.length > 0 ? (
              deletedBlogs.map((item) => (
                <div
                  key={item._id}
                  className={`rounded-xl shadow-md overflow-hidden ${
                    darkTheme ? "bg-[#2A2A2A]" : "bg-gray-50"
                  }`}
                >
                  <img
                    className="w-full h-52 object-cover"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <div className="p-3">
                    <h1 className="truncate font-semibold">{item.title}</h1>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <button
                        onClick={() => restoreBlog(item)}
                        className="px-3 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white text-sm"
                      >
                        Restore
                      </button>
                      <button
                        onClick={() => deleteBlog(item)}
                        className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white text-sm"
                      >
                        Delete Forever
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">
                Recycle Bin is empty.
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default DeletePage;
