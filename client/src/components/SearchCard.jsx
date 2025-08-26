import React from "react";
import { useTranslation } from "react-i18next";
function SearchCard() {
  const { t } = useTranslation();
  const SeachCards = [
    {
      image:
        "https://blog.trazler.com/wp-content/uploads/2024/11/pexels-pixabay-259447-800x500.jpg",
      title: `${t("article-title-one")}`,
      description: `${t("article-description-one")}`,
      author: "Leonie Malleville",
      date: `${t("date-one")}`,
    },
    {
      image:
        "https://blog.trazler.com/wp-content/uploads/2023/06/Flights-from-Dublin-to-Florence-discover-the-beauty-of-Firenze-1-800x500.jpg",
      title: `${t("article-title-two")}`,
      description: `${t("article-description-two")}`,
      author: "Leonie Malleville",
      date: `${t("date-two")}`,
    },
    {
      image:
        "https://blog.trazler.com/wp-content/uploads/2023/01/What-Is-the-Best-Time-to-Visit-Faro_-1-800x500.png",
      title: `${t("article-title-three")}`,
      description: `${t("article-description-three")}`,
      author: "Leonie Malleville",
      date: `${t("date-three")}`,
    },
    {
      image:
        "https://blog.trazler.com/wp-content/uploads/2024/10/image6-1-800x500.png",
      title: `${t("article-title-four")}`,
      description: `${t("article-description-four")}`,
      author: "Leonie Malleville",
      date: `${t("date-four")}`,
    },
  ];
  return (
    <>
      {SeachCards.map(function (item, index) {
        return (
          <React.Fragment key={index}>
            <div className="card w-72 relative flex flex-col">
              <img
                className="w-full h-48 object-cover"
                src={item.image}
                alt=""
              />
              <div className="flex flex-col px-5 w-full h-48 mt-5">
                <h1 className="text-white hover:text-[#7A65E1] transition-colors duration-75 truncate">
                  {item.title}
                </h1>
                <p className="text-white truncate">{item.description}</p>
                <div className="flex gap-x-2 items-center justify-between">
                  <div>
                    <h6 className="text-white text-[10px] whitespace-nowrap font-light">
                      {t("by")}{" "}
                      <span className="font-extrabold hover:text-[#727272] transition-colors">
                        {item.author}
                      </span>
                    </h6>
                  </div>
                  <div className="w-5 h-[.5px] bg-white"></div>
                  <div>
                    <h6 className="text-white text-[10px] whitespace-nowrap">
                      {item.date}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default SearchCard;
