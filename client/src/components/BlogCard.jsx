import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";

function BlogCard({ darkTheme, card, setCard }) {
  const { t } = useTranslation();
  const [datas, setData] = useState([]);
  const [admin, setAdmin] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Fetch blogs
  useEffect(() => {
    const fetchBlogCards = async () => {
      try {
        const blogs = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/blogcard`
        );
        const activeBlogs = blogs.data.filter(
          (item) => item.deletedPost === false
        );
        setData(activeBlogs);
      } catch (err) {
        console.error("❌ Error fetching blog cards:", err);
        setError("Failed to load blogs.");
      }
    };
    fetchBlogCards();
  }, []);

  // ✅ Fetch admin data only if needed
  useEffect(() => {
    const fetchAdminData = async () => {
      console.log("🔍 Current pathname:", location.pathname);

      // only fetch on /admin or pages that require it
      if (location.pathname !== "/admin") {
        console.log("⏭️ Skipping admin data fetch on path:", location.pathname);
        return;
      }

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/admin`,
          { withCredentials: true }
        );
        console.log("✅ Admin data fetched:", res.data);
        setAdmin(res.data);
      } catch (err) {
        console.error("❌ Admin fetch error:", err);
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          navigate("/login");
        } else {
          setError("Something went wrong fetching admin data.");
        }
      }
    };

    fetchAdminData();
  }, [location.pathname, navigate]);

  return (
    <>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {datas.slice(0, visibleCount).map((item, index) => (
        <React.Fragment key={index}>
          <Link
            to={`/blog/${item._id}`}
            state={{ blog: item }}
            className={`w-full mb-5  ${
              card
                ? "xl:w-full lg:flex lg:flex-row lg:items-center"
                : "xl:w-[30%] flex flex-col"
            } h-fit`}
          >
            {/* Image */}
            <div className={`${card ? "lg:w-[45%]" : "w-full"}`}>
              <img
                src={item.imageUrl}
                className={`object-cover w-full ${
                  card ? "h-[150px]" : "h-[150px]"
                } rounded-md`}
                alt={item.tag}
              />
            </div>

            {/* Content */}
            <div className={`${card ? "lg:w-[55%]" : ""}`}>
              <div className="px-5 flex flex-col gap-y-2 py-3">
                <div
                  className={`tag flex items-center justify-center w-fit h-5 px-2 py-[2px] ${
                    darkTheme ? "bg-white" : "bg-[#E9E9EB]"
                  } rounded-md text-black`}
                >
                  <h1 className="text-[10px]">{item.category}</h1>
                </div>
                <h1 className="hover:text-[#8875E4] transition-all font-bold text-lg leading-snug truncate">
                  {item.title}
                </h1>
                <p
                  className={`truncate ${
                    darkTheme ? "text-white" : "text-[#717275]"
                  } text-sm`}
                >
                  {item.description}
                </p>
                <div className="flex items-center text-[10px] justify-start gap-x-3">
                  <p className="flex gap-x-1">
                    {t("by")}{" "}
                    <span className="font-extralight hover:text-[#8875E4] transition-all">
                      {item.authorname}
                    </span>
                  </p>
                  <div
                    className={`w-[30px] h-[1px] ${
                      darkTheme ? "bg-white" : "bg-black"
                    }`}
                  />
                  <p>
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </React.Fragment>
      ))}

      <div className="w-full flex items-center justify-center">
        {visibleCount < datas.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className={`px-5 mt-4 rounded-md py-3 bg-[#292929] hover:bg-[#7A7A7A] transition-all sm:px-28 text-[12px] font-extrabold text-white`}
          >
            <h4>{t("load-more")}</h4>
          </button>
        )}
      </div>
    </>
  );
}

export default BlogCard;
