import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchCard from "./SearchCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import axios from "axios";
import { toast, Toaster } from "sonner";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function Navbar({ darkTheme, setDarkTheme }) {
  const [isDark, setIsdark] = useState(false);
  const [move, setMove] = useState(false);
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState(true);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchContainer = useRef(null);
  const location = useLocation();
  const navRef = useRef(null);
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const toggle = () => {
    setIsdark(!isDark);
    setDarkTheme(!darkTheme);
  };
  const moveCirc = () => {
    setMove(!move);
    setDarkTheme(!darkTheme);
  };
  const showMenu = () => {
    setMenuOpen(true);
    document.querySelector("body").style.overflow = "hidden";
  };
  const hideMenu = () => {
    setMenuOpen(false);
    document.querySelector("body").style.overflow = "scroll";
  };
  useEffect(() => {
    console.log("🔍 Current pathname:", location.pathname);
  
    const fetchAdminData = async () => {
      try {
        console.log("📡 Calling /admin endpoint...");
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/admin`,
          { withCredentials: true }
        );
        console.log("✅ Admin data response:", res.data);
        setData(res.data);
      } catch (err) {
        console.error("❌ Error fetching admin data:", err);
  
        if (
          err.response &&
          (err.response.status === 401 || err.response.status === 403)
        ) {
          console.warn("⚠️ Unauthorized or forbidden response");
          if (location.pathname.startsWith("/admin")) {
            console.log("➡️ Redirecting to /login from admin route");
            navigate("/login");
          }
        } else {
          console.error("🔥 Unexpected error:", err.message);
        }
      }
    };
  
    // Debugging: Show when fetchAdminData is called
    if (location.pathname.startsWith("/admin")) {
      console.log("🚀 Fetching admin data because path is:", location.pathname);
      fetchAdminData();
    } else {
      console.log("⏭️ Skipping admin data fetch on path:", location.pathname);
    }
  }, [navigate, location.pathname]);
  
  
  useEffect(() => {
    const container = searchContainer.current;
    if (!container) return;

    container.style.transition = "transform 0.5s ease";

    if (search === false) {
      container.style.transform = "translateY(0%)";
    } else {
      container.style.transform = "translateY(-162%)";
    }
  }, [search]);

  useGSAP(() => {
    let nav = navRef.current;
    let lastScroll = 0;
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        let scrollY = self.scroll();
        if (scrollY > lastScroll) {
          gsap.to(nav, {
            y: -100,
            ease: "none",
            duration: 0.3,
          });
        } else {
          gsap.to(nav, {
            y: 0,
            duration: 0.3,
            ease: "none",
          });
        }
        lastScroll = scrollY;
      },
    });
  });
  return (
    <>
      <Toaster position="bottom-right" />
      <nav
        ref={menuRef}
        className={` ${
          darkTheme ? "bg-[#1C1C1C] text-white" : "bg-white text-[#1C1C1C]"
        }w-full h-screen  top-0 left-0 absolute  bg-[#1C1C1C] overflow-y-auto z-[999] flex flex-col transition-all duration-300 ${
          !menuOpen ? "translate-x-[-100%]" : "translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-b-zinc-400">
          <Link to="/">
            {darkTheme ? (
              <img className="w-20" src="/LOGO.png" alt="" />
            ) : (
              <img className="w-20" src="/trazlerblack.png" />
            )}
          </Link>
          {isDark ? (
            <i onClick={hideMenu} className="ri-close-line"></i>
          ) : (
            <i className="ri-close-line text-white" onClick={hideMenu}></i>
          )}
        </div>
        <div className="flex flex-col gap-y-4 px-8 mt-5 gap-x-3">
          <div
            className={`${
              darkTheme ? "text-white" : "text-black"
            } flex gap-x-3`}
          >
            {data ? (
              <Link
                className={`px-4 py-2 rounded-md text-white bg-red-600`}
                onClick={async () => {
                  await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/logout`,
                    {
                      withCredentials: true,
                    }
                  );
                  setTimeout(function () {
                    setData(null);
                    toast.success("Logout Successful!");
                    navigate("/login");
                  }, 1500);
                }}
              >
                Logout
              </Link>
            ) : (
              <>
                <Link
                  className={`px-4 py-2 rounded-md ${
                    darkTheme ? "bg-black" : "bg-[#1C1C1C] text-white"
                  }`}
                  to="/register"
                >
                  Register
                </Link>
                <Link
                  className={`px-4 py-2 rounded-md ${
                    darkTheme ? "bg-black" : "bg-[#1C1C1C] text-white"
                  }`}
                  to="/login"
                >
                  Login
                </Link>
              </>
            )}
          </div>
          <div className="flex gap-x-4">
            <img
              src="/en.svg"
              onClick={() => {
                i18n.changeLanguage("en");
              }}
              alt=""
            />
            <img
              onClick={() => {
                i18n.changeLanguage("fr");
              }}
              src="/fr.svg"
              alt=""
            />
          </div>
        </div>
        <div className="px-8 mt-20">
          <h1
            className={`text-3xl ${
              darkTheme ? "text-white" : "text-[#1C1C1C]"
            }`}
          >
            {t("category")}
          </h1>
          <div className="flex flex-col mt-10">
            {[
              `${t("africa")}`,
              `${t("north-america")}`,
              `${t("south-america")}`,
              `${t("europe")}`,
              `${t("asia")}`,
              `${t("oceania")}`,
            ].map(function (item, index) {
              return (
                <React.Fragment key={index}>
                  <div className="border-b py-2 border-b-zinc-300">
                    <h1
                      className={`${
                        darkTheme ? "text-white" : "text-[#1C1C1C]"
                      }`}
                    >
                      {item}
                    </h1>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <div className=" px-8 py-4 mt-5">
          <div
            className={`w-full rounded-md min-h-5 px-4 py-3 bg-[#272727] flex gap-x-3 ${
              darkTheme ? "bg-[#272727]" : "bg-white border border-zinc-300"
            }`}
          >
            {isDark ? (
              <i className="ri-facebook-fill"></i>
            ) : (
              <i className="ri-facebook-fill text-white"></i>
            )}
            {isDark ? (
              <i className="ri-instagram-line"></i>
            ) : (
              <i className="ri-instagram-line text-white"></i>
            )}
            {isDark ? (
              <i className="ri-linkedin-fill "></i>
            ) : (
              <i className="ri-linkedin-fill text-white"></i>
            )}
            {isDark ? (
              <i className="ri-tiktok-fill"></i>
            ) : (
              <i className="ri-tiktok-fill text-white"></i>
            )}
          </div>
          <div
            className={`bg-[#272727] rounded-md mt-10 w-72 min-h-52 px-3 py-3 ${
              darkTheme ? "bg-[#272727]" : "bg-white border border-zinc-300"
            }`}
          >
            <h6 className={`${darkTheme ? "text-white " : "text-[#1C1C1C]"}`}>
              {t("notify")}
            </h6>
            <input
              className={` ${
                isDark
                  ? "bg-white border border-zinc-400"
                  : "bg-none border placeholder:text-zinc-700 border-zinc-700"
              } px-3 py-4    w-full outline-0 rounded-md mt-4`}
              type="text"
              placeholder={`${t("email")}`}
            />
            <button
              className={`bg-[#1C1C1C] mt-5 w-full text-white px-4 py-3 rounded-md`}
            >
              {t("subscribe")}
            </button>
            <div
              className={`flex items-center mt-5 ${
                darkTheme ? "text-white" : "text-[#1C1C1C]"
              } gap-x-2 justify-center`}
            >
              <input type="checkbox" />
              <p className="text-[10px]">{`${t("check")}`}</p>
            </div>
          </div>
        </div>
      </nav>
      <nav
        ref={navRef}
        className={`w-full ${
          isDark
            ? "bg-white/10 backdrop-blur-2xl"
            : "bg-zinc-700/10 backdrop-blur-2xl"
        } fixed top-0 left-0 h-16 flex items-center  justify-between px-8 py-5 z-50  transition-all duration-200`}
      >
        <i
          onClick={showMenu}
          className={`ri-menu-line ${
            isDark ? "text-black" : "text-white"
          } flex xl:hidden`}
        ></i>
        <Link to="/">
          {darkTheme ? (
            <img className="w-18" src="/LOGO.png" alt="" />
          ) : (
            <img src="/trazlerblack.png" className="w-18" />
          )}
        </Link>
        <div className="flex gap-2 xl:hidden">
          {isDark ? (
            <i onClick={toggle} className="ri-sun-fill w-4 text-black"></i>
          ) : (
            <i onClick={toggle} className="ri-moon-fill text-white w-4"></i>
          )}
          <i
            onClick={() => {
              setSearch(!search);
            }}
            className={`ri-search-line ${isDark ? "text-black" : "text-white"}`}
          ></i>
        </div>
        <div className="xl:flex hidden  gap-4 items-center">
          {data ? (
            <Link
              onClick={async () => {
                await axios.get(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
                  withCredentials: true,
                });
                setTimeout(function () {
                  setData(null);
                  toast.success("Logout Successful!");
                  navigate("/login");
                }, 1500);
              }}
              className={`px-5  rounded-md py-3 outline-0 bg-red-600 transition-all text-white sm:px-5 text-[12px] font-extrabold`}
            >
              Logout
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className={`px-5  rounded-md py-3 outline-0 bg-[#292929] hover:bg-[#7A7A7A] transition-all sm:px-5 text-[12px] font-extrabold  ${
                  darkTheme ? "text-white" : "text-white"
                }`}
              >
                Login
              </Link>
              <Link
                to="/register"
                className={`px-5  rounded-md py-3 outline-0 bg-[#292929] hover:bg-[#7A7A7A] transition-all sm:px-5 text-[12px] font-extrabold  ${
                  darkTheme ? "text-white" : "text-white"
                }`}
              >
                Register
              </Link>
            </>
          )}
          {darkTheme ? (
            <i onClick={toggle} className="ri-sun-fill text-white w-4"></i>
          ) : (
            <i onClick={toggle} className="ri-sun-fill text-black w-4"></i>
          )}
          <div
            onClick={() => setDarkTheme(!darkTheme)}
            className={`w-8 h-3 flex items-center px-1 rounded-md cursor-pointer ${
              darkTheme ? "bg-white" : "bg-black"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                darkTheme ? "translate-x-4 bg-black" : "translate-x-0 bg-white"
              }`}
            ></div>
          </div>

          {darkTheme ? (
            <i className="ri-moon-fill w-4 text-white"></i>
          ) : (
            <i className="ri-moon-fill w-4 text-black"></i>
          )}
          <i
            onClick={() => {
              setSearch(!search);
            }}
            className={`ri-search-line ${
              darkTheme ? " text-white" : "text-black"
            } w-4`}
          ></i>
          {location.pathname === "/" && (
            <>
              <img
                onClick={() => {
                  i18n.changeLanguage("en");
                }}
                src="/en.svg"
                alt=""
              />
              <img
                onClick={() => {
                  i18n.changeLanguage("fr");
                }}
                src="/fr.svg"
                alt=""
              />
            </>
          )}
        </div>
        <div
          ref={searchContainer}
          className="absolute top-16 p-8 left-0 flex items-center justify-center bg-[#1C1C1C]/80 backdrop-blur-md w-full gap-x-3 flex-col"
          style={{ transform: "translateY(-120%)" }} // initial state
        >
          <div className="flex w-full   gap-x-2">
            <div className="flex w-[80%] items-center gap-x-2 px-3  rounded-md border-[#757575]/10 border placeholder:text-[#757575] bg-[#292929]">
              <i
                className={`ri-search-line w-4 ${
                  isDark ? "text-black" : "text-white"
                }`}
              ></i>
              <input
                type="text"
                placeholder={`${t("search-placeholder")}`}
                className="sm:px-5 py-3 rounded-md border-[#757575]/10 outline-0 text-white border-0 border-t border-b border-r-0 border-l-0 placeholder:text-[#757575] placeholder:text-[15px] bg-[#292929]"
              />
            </div>
            <button className="px-5 py-4 w-[20%] whitespace-nowrap bg-[#212121] text-white rounded-md">
              <h1 className="text-sm">{t("research")}</h1>
            </button>
          </div>
          <div id="tags " className=" mt-4 hidden w-full lg:flex  gap-x-2">
            {[
              "TURKIYE",
              "TRAVEL",
              "SPAIN",
              "SCOTLAND",
              "SAVE TIME",
              "ITALY",
              "HAWAII",
              "GREECE",
              "GERMANY",
              "ENGLAND",
            ].map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <h1 className=" bg-white w-[10%] text-black rounded-md hover:bg-black flex items-center justify-center px-2 xl:px-3 xl:py-1 hover:text-white text-[7.9px]">
                    {item}
                  </h1>
                </React.Fragment>
              );
            })}
          </div>
          <div className="lg:flex hidden gap-x-5 mt-5">
            <SearchCard />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
