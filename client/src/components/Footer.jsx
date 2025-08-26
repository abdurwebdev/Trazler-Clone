import React from "react";
import { useTranslation } from "react-i18next";
function Footer({ darkTheme }) {
  const { t } = useTranslation();
  return (
    <>
      <footer
        className={`w-full flex items-center text-center lg:text-left text-[13px] px-5 py-5 justify-center lg:flex-row flex-col lg:items-start  lg:justify-between  ${
          darkTheme ? "bg-[#292929] text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex flex-col items-center lg:items-start lg:w-96 gap-y-8 ">
          <img className="w-42" src="/logobro.png" alt="" />
          <p>{t("mission-statement")}</p>
        </div>
        <div className="flex gap-x-5 mt-5 mb-5 gap-y-5">
          <i className="text-3xl ri-facebook-circle-fill"></i>
          <i className="text-3xl ri-instagram-line"></i>
          <i className="text-3xl ri-linkedin-fill"></i>
          <i className="text-3xl ri-tiktok-fill"></i>
        </div>
      </footer>
      <div
        className={`flex text-[13px] pt-5  flex-col ${
          darkTheme ? " bg-[#1C1C1C] text-white " : "bg-white text-black"
        } items-center justify-center gap-y-5`}
      >
        <h4>{t("copyright")}</h4>
        <div className="flex mb-3 gap-x-5">
          <p>{t("meet-the-team")}</p>
          <p>{t("privacy-policy")}</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
