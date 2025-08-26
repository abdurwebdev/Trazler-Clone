import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useTranslation } from "react-i18next";
import BlogCard from "../components/BlogCard";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";

function Home({ darkTheme, setDarkTheme }) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="w-full select-none h-screen sm:h-[60vh] lg:h-[80vh] xl:h-screen bg-[#1C1C1C] bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className=" w-full h-96 flex flex-col items-start px-8 justify-center">
          <h1 className="text-white text-4xl mt-28 sm:text-5xl lg:text-6xl xl:text-6xl">
            {t("hero")}
          </h1>
          <p className="text-white text-3xl  mt-5">{t("hero-child")}</p>
        </div>
      </div>
      <div
        className={`${
          darkTheme ? "bg-[#1C1C1C] text-white" : "bg-white text-[#1C1C1C]"
        } pb-20`}
      >
        <div className="articles sm:px-16 xl:px-8  px-8 py-5  w-full flex items-center justify-between ">
          <h1>{t("latest-articles")}</h1>
          <Link to="allblogs"><h1>{t("see-all")}</h1></Link>
        </div>
        <div className="flex px-8 xl:px-8  sm:px-16 xl:flex-wrap xl:flex-row flex-col gap-y-5 gap-x-4 xl:gap-x-14 xl:gap-y-10">
          <BlogCard darkTheme={darkTheme} />
        </div>
        <div className="px-8 mt-10  ">
          <div
            className={`w-full h-[1px] ${
              darkTheme ? "bg-white" : "bg-zinc-900"
            }`}
          ></div>
          <h1 className="mt-5 mb-10">{t("popular-categories")}</h1>
          <div>
            <CategoryCard />
          </div>
          <div
            className={`w-full mt-20 xl:px-48 lg:px-48 sm:px-10 xl:py-16 px-5 py-5 flex flex-col gap-y-7 ${
              darkTheme ? "bg-[#292929]" : "bg-white"
            }`}
          >
            <h1 className="xl:text-4xl">
              {t("newsletter-signup")}
              <span>{t("newsletter-description")}</span>
            </h1>
            <div className="xl:flex xl:flex-row flex flex-col gap-x-5 gap-y-5 sm:flex-row">
              <input
                className="xl:w-[650px] xl:px-5 sm:w-96 lg:w-96 xl:py-3 px-3 rounded-md w-full py-4 border-zinc-300 outline-none border"
                type="text"
                placeholder={t("email-placeholder")}
              />
              <button className="bg-[#1C1C1C] px-5 py-3 rounded-md text-white">
                <h4>{t("subscribe-button")}</h4>
              </button>
            </div>
            <div className="flex gap-x-3">
              <input type="checkbox" />
              <p>{t("terms-checkbox")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
