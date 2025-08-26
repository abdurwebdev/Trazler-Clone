import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";

const EditBlog = ({ darkTheme }) => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const fetchBlogs = async () => {
    try {
      let res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/edit`,
        {
          withCredentials: true,
        }
      );
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };
  const editBlog = (id) => {
    navigate(`edit/${id}`);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <Toaster position="bottom-right" />
      <div
        className={`pt-20 sm:px-10 px-2 ${
          darkTheme ? "bg-[#1C1C1C] text-white" : "bg-white"
        } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative gap-x-11 gap-y-16 pb-20`}
      >
        {blogs.map((item) => (
          <div key={item._id} className="sm:w-64 w-full h-80 relative">
            <img
              className="sm:w-72 w-full h-56 object-cover"
              src={item.imageUrl}
              alt=""
            />
            <h1 className="truncate mt-3 ">{item.title}</h1>
            <p className="truncate mt-3">{item.description}</p>
            <button
              onClick={() => editBlog(item._id)}
              className="px-4 py-2 mt-3 w-20 bg-red-600 rounded-md text-white"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default EditBlog;
