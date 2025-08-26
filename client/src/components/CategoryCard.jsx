import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Card = ({ image, textone, texttwo }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full cursor-pointer">
      <div className="w-full h-full  absolute top-0 flex items-center justify-center flex-col left-0">
        <div className="  text-center group relative overflow-hidden w-fit h-7">
          <div>
            <h1 className=" group-hover:-translate-y-full transition-all duration-300">
              {t(textone.toLowerCase())}
            </h1>
          </div>
          <h1 className="group-hover:-translate-y-full transition-all duration-300 ">
            {t(texttwo.toUpperCase())}
          </h1>
        </div>
      </div>
      <img
        className="w-full h-44 object-cover"
        src={image}
        alt={t(textone.toLowerCase())}
      />
    </div>
  );
};

function CategoryCard() {
  const { t } = useTranslation();

  const data = [
    {
      image:
        "https://blog.trazler.com/wp-content/uploads/2024/10/image6-1-800x500.png",
      textone: "africa",
      texttwo: "view posts",
    },
    {
      image:
        "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      textone: "asia",
      texttwo: "view posts",
    },
    {
      image:
        "https://images.unsplash.com/photo-1664215623224-9e3eeea3e050?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      textone: "europe",
      texttwo: "view posts",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      textone: "oceania",
      texttwo: "view posts",
    },
    {
      image:
        "https://images.unsplash.com/photo-1659372408005-2239754963c7?q=80&w=506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      textone: "north-america",
      texttwo: "view posts",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1697729955700-6004e5402a74?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      textone: "south-america",
      texttwo: "view posts",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 space-y-4 xl:grid-cols-4">
      {data.map((item, index) => (
        <Link key={index} to={`/category/${index}`}>
          <Card
            image={item.image}
            textone={item.textone}
            texttwo={item.texttwo}
          />
        </Link>
      ))}
    </div>
  );
}

export default CategoryCard;
