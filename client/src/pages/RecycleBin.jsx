import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";

const RecycleBin = ({ darkTheme }) => {
  const [blogs, setBlogs] = useState([]);

  const fetchDeletedBlogs = async () => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/edit`,
        { withCredentials: true }
      );
      // ✅ only soft-deleted blogs
      setBlogs(res.data.filter((b) => b.deletedPost));
    } catch (error) {
      console.error("Error fetching deleted blogs", error);
    }
  };

  useEffect(() => {
    fetchDeletedBlogs();
  }, []);

  const restoreBlog = async (item) => {
    try {
      let res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/restore/${item._id}`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        toast.success("Blog restored!");
        fetchDeletedBlogs();
      }
    } catch (error) {
      console.error("Error restoring blog", error);
      toast.error("Restore failed!");
    }
  };

  const deleteForever = async (item) => {
    try {
      let res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/delete/${item._id}`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        toast.success("Blog permanently deleted!");
        fetchDeletedBlogs();
      }
    } catch (error) {
      console.error("Error deleting blog", error);
      toast.error("Permanent delete failed!");
    }
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <div
        className={`pt-20 sm:px-10 px-2 ${
          darkTheme ? "bg-[#1C1C1C] text-white" : "bg-white"
        } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-11 gap-y-16 pb-20`}
      >
        {blogs.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            Recycle Bin is empty
          </p>
        )}
        {blogs.map((item) => (
          <div
            key={item._id}
            className={`sm:w-72 w-full h-80 rounded-xl shadow-md overflow-hidden ${
              darkTheme ? "bg-[#2A2A2A]" : "bg-gray-50"
            }`}
          >
            <img
              className="sm:w-72 w-full h-52 object-cover"
              src={item.imageUrl}
              alt={item.title}
            />
            <div className="p-3">
              <h1 className="truncate font-semibold">{item.title}</h1>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
              <div className="flex items-center justify-between mt-3">
                <button
                  onClick={() => restoreBlog(item)}
                  className="px-3 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white text-sm"
                >
                  Restore
                </button>
                <button
                  onClick={() => deleteForever(item)}
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white text-sm"
                >
                  Delete Forever
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecycleBin;
