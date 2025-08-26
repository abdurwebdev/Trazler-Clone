import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function AllBlogs({ darkTheme }) {
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    try {
      const fectData = async () => {
        let res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/blogcard`
        );
        setData(res.data);
        console.log("dataaaaa", data);
      };
      fectData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <div
        className={`py-20 px-3 lg:px-10 ${
          darkTheme ? "bg-[#1C1C1C] text-white" : "bg-white"
        }`}
      >
        <h1 className="text-3xl mb-8">Read All Blogs.</h1>
        {data.length === 0 ? (
          "No blogs found"
        ) : (
          <>
            {" "}
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <Link
                  to={`/blog/${item._id}`}
                  state={{ blog: item }}
                  className="w-full mb-5 xl:w-[60%] lg:flex lg:flex-row lg:items-center flex flex-col
            h-fit"
                >
                  {/* Image */}
                  <div className="lg:w-[45%] w-full">
                    <img
                      src={item.imageUrl}
                      className="object-cover w-full  ${
                  card  h-[150px] h-[150px]"
                      alt={item.tag}
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:w-[55%]">
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
                            {item.adminname}
                          </span>
                        </p>
                        <div
                          className={`w-[30px] h-[1px] ${
                            darkTheme ? "bg-white" : "bg-black"
                          }`}
                        />
                        <p>{item.date}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </React.Fragment>
            ))}
            <div className="w-full flex items-center justify-center">
              <button
                className={`px-5 mt-4 rounded-md py-3 bg-[#292929] hover:bg-[#7A7A7A] transition-all sm:px-28 text-[12px] font-extrabold ${
                  darkTheme ? "text-white" : "text-white"
                }`}
              >
                <h4>{t("load-more")}</h4>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AllBlogs;
