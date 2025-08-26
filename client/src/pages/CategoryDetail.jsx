import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

function CategoryDetail({ darkTheme, setDarkTheme }) {
  const { name } = useParams(); // ✅ use category name instead of id
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { name: "Africa", mainhead: "Africa", mainpara: "From thrilling safaris..." },
    { name: "Asia", mainhead: "Asia", mainpara: "From the exotic charm of Bali..." },
    { name: "Europe", mainhead: "Europe", mainpara: "From the cobblestone streets..." },
    { name: "Oceania", mainhead: "Oceania", mainpara: "From the ancient Maori cultures..." },
    { name: "North America", mainhead: "North America", mainpara: "From the iconic skyscrapers..." },
    { name: "South America", mainhead: "South America", mainpara: "Dreaming of high-altitude treks..." },
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const categoryObj = categories.find(c => c.name === name);
        if (!categoryObj) {
          setError("Category not found");
          setLoading(false);
          return;
        }
        setCategoryData(categoryObj);

        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/blogcard?category=${encodeURIComponent(name)}`,
          { withCredentials: true }
        );
        setBlogs(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load blogs");
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [name]);

  const [category, setCategory] = useState();
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/category`, {
          withCredentials: true
        });
        setCategory(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategory();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  if (!categoryData) return <p className="text-center py-10 text-red-500">Category not found.</p>;

  return (
    <div className={`py-10 pt-0 lg:pt-5 ${darkTheme ? "bg-[#1C1C1C] text-white" : "bg-white text-black"}`}>
      <div className={`px-6 py-10 pt-20 ${darkTheme ? "bg-[#1C1C1C] text-white" : "bg-white text-black"} lg:flex lg:flex-row lg:justify-between lg:items-start lg:gap-x-11`}>
        <div className="lg:w-[60%]">
          <h1 className="text-4xl">{categoryData.mainhead}</h1>
          <p className="text-xl mt-5 text-[#717275]">{categoryData.mainpara}</p>

          {/* Blogs */}
          <div className="mt-5">
            {blogs.length > 0 ? (
              blogs.map((item, index) => (
                <Link
                  to={`/blog/${item._id}`}
                  state={{ blog: item }}
                  key={index}
                  className="w-full mb-5 xl:w-[80%] lg:flex lg:flex-row lg:items-center flex flex-col h-fit"
                >
                  {/* Image */}
                  <div className="lg:w-[45%] w-full">
                    <img src={item.imageUrl} className="object-cover w-full h-[150px]" alt={item.tag} />
                  </div>
                  {/* Content */}
                  <div className="lg:w-[55%] px-5 flex flex-col gap-y-2 py-3">
                    <div className={`tag flex items-center justify-center w-fit h-5 px-2 py-[2px] ${darkTheme ? "bg-white" : "bg-[#E9E9EB]"} rounded-md text-black`}>
                      <h1 className="text-[10px]">{item.category}</h1>
                    </div>
                    <h1 className="hover:text-[#8875E4] transition-all font-bold text-lg leading-snug truncate">
                      {item.title}
                    </h1>
                    <p className={`truncate ${darkTheme ? "text-white" : "text-[#717275]"} text-sm`}>
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p>No blogs found for this category.</p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-[35%]">
          {/* Categories */}
          <div className="categories flex flex-col mt-10 gap-y-3 sticky top-0">
            {categories.map((cat, index) => (
              <Link to={`/category/${cat.name}`} key={index}>
                <div className={`w-full group h-20 ${darkTheme ? "bg-[#272727]" : "bg-white text-black border-zinc-700 border"} flex items-center justify-between px-5`}>
                  <h1 className="text-[10px]">{cat.name.toUpperCase()}</h1>
                  <div className="w-10 h-5 overflow-hidden relative flex items-center justify-center gap-y-0">
                    <i className="ri-arrow-right-line translate-y-full absolute group-hover:-translate-y-0 transition-all duration-300"></i>
                    <h1 className="group-hover:-translate-y-full transition-all duration-300">
                      {
                        cat.name === "Asia" ? category?.[0]?.asia.length :
                        cat.name === "Africa" ? category?.[0]?.africa.length :
                        cat.name === "Europe" ? category?.[0]?.europe.length :
                        cat.name === "Oceania" ? category?.[0]?.oceania.length :
                        cat.name === "North America" ? category?.[0]?.northamerica.length :
                        cat.name === "South America" ? category?.[0]?.southamerica.length : 0
                      }
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryDetail;
