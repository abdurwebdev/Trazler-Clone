import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlogCard from "../components/BlogCard";
import axios from "axios";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function BlogDetail({ darkTheme, setDarkTheme }) {
  const { id } = useParams();
  const categoryRef = useRef(null);
  const [image, setImage] = useState(window.innerWidth > 1100);
  const [links, setLinks] = useState(window.innerWidth > 1200);
  const [blogs, setBlogs] = useState(null);
  const [data, setData] = useState();
  const [postss, setPosts] = useState([]);
  const navigate = useNavigate();
  const [sideCards, setSideCards] = useState([]);
  const [me, setMe] = useState([]);
  const [category,setCategory] = useState();
  useEffect(()=>{
    const fecthCategory =async () =>{
      try{
        let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/category`,{
          withCredentials:true
        })
        setCategory(res.data);
       }
       catch(err){
   console.error(err);
       }
    }
    fecthCategory();
  },[])
  useEffect(()=>{
    console.log("mogieshogie",category)
  },[category])
  useEffect(() => {
    if (window.innerWidth > 1100) {
      setImage(true);
    } else {
      setImage(false);
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setLinks(true);
    } else {
      setLinks(false);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setImage(window.innerWidth > 1100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const categories = [
    {
      name: "Africa",
      mainhead: "Africa",
      mainpara:
        "From thrilling safaris in the heart of the Serengeti to the idyllic beaches of the Seychelles, and the vibrant souks of Marrakech, Africa invites you on an extraordinary adventure. Our comprehensive guides will help you plan your perfect trip and create unforgettable memories.",
    },
    {
      name: "Asia",
      mainhead: "Asia",
      mainpara:
        "From the exotic charm of Bali to the towering skyscrapers of Tokyo, and the ancient temples of Angkor, Asia invites you on an unforgettable journey. Our comprehensive guides will help you experience authentic adventures and create lasting memories across this diverse and culturally rich continent.",
    },
    {
      name: "Europe",
      mainhead: "Europe",
      mainpara:
        "From the cobblestone streets of Rome to the romantic canals of Venice and the majestic castles of Scotland, Europe is brimming with treasures waiting to be discovered. Dive into our selection of articles to explore diverse destinations, from bustling metropolises to quaint villages. Discover practical tips, detailed itineraries, and captivating stories that will guide you through the history, culture, and beauty of our continent.",
    },
    {
      name: "Oceania",
      mainhead: "Oceania",
      mainpara:
        "From the ancient Maori cultures to the breathtaking landscapes of New Zealand, and the paradise islands of French Polynesia, dive into the heart of Oceania. Find comprehensive guides here to explore the diverse islands and be inspired by our travel stories.",
    },
    {
      name: "North America",
      mainhead: "North America",
      mainpara:
        "From the iconic skyscrapers of New York to the idyllic beaches of California, and the majestic forests of Canada, find your inspiration in our travel articles. Explore our practical tips, detailed itineraries, and authentic stories to help you plan your perfect trip.",
    },
    {
      name: "South America",
      mainhead: "South America",
      mainpara:
        "Dreaming of high-altitude treks, jungle safaris, or Argentine wine tastings? South America is your ideal destination. Find comprehensive guides here to explore various countries and be inspired by our travel stories.",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      setLinks(window.innerWidth > 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    const category = categoryRef.current;
    const mm = gsap.matchMedia();
    mm.add("(min-width:1200px)", () => {
      gsap.to(category, {
        scrollTrigger: {
          trigger: category,
          start: "top 10%",
          pin: true,
          end: () => {
            let aboutSection = document.querySelector(".about");
            if (!aboutSection) return "+=500";
            return (
              aboutSection.getBoundingClientRect().top +
              aboutSection.offsetHeight -
              505
            );
          },
        },
      });
    });
  });
  useEffect(() => {
    const fetchPosts = async () => {
      let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/me`, {
        withCredentials: true,
      });
      setPosts(res.data.posts);
    };
    fetchPosts();
  }, []);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/blogcard/${id}`,
          { withCredentials: true }
        );
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };
    fetchBlogs();
  }, [id]);

  useEffect(() => {
    const isLoggedIn = document.cookie.includes("token=");
    if (!isLoggedIn) return;
    const fetchAdminData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/admin`,
          {
            withCredentials: true,
          }
        );
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAdminData();
  }, [navigate]);

  useEffect(() => {
    const fetchSideCards = async () => {
      try {
        let res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/blogcard`
        );
        setSideCards(res.data);
      } catch (error) {
        console.error("Error", error);
      }
    };
    fetchSideCards();
  }, []);
  useEffect(() => {
    const fetchMe = async () => {
      try {
        let res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/me`, {
          withCredentials: true,
        });
        setMe(res.data.posts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMe();
  }, []);
  useEffect(() => {
    console.log("datatatatatata", me);
  }, [me]);
  if (!blogs) {
    return (
      <h1 className="text-center py-10 text-red-500 text-xl">
        Blogs not found.
      </h1>
    );
  }

  return (
    <>
      <div
        className={`links w-20 px-3 h-96 bg-none top-44 ${
          links ? "fixed" : "hidden"
        } flex flex-col gap-y-4 text-[23px]`}
      >
        {darkTheme ? (
          <i className="ri-facebook-circle-fill text-white"></i>
        ) : (
          <i className="ri-facebook-circle-fill text-[#2D4373]"></i>
        )}
        {darkTheme ? (
          <i className="ri-twitter-x-fill text-white"></i>
        ) : (
          <i className="ri-twitter-x-fill text-[#0087BA]"></i>
        )}
        {darkTheme ? (
          <i className="ri-pinterest-fill text-white"></i>
        ) : (
          <i className="ri-pinterest-fill text-[#9F191F]"></i>
        )}
        {darkTheme ? (
          <i className="ri-mail-line text-white"></i>
        ) : (
          <i className="ri-mail-line"></i>
        )}
        {darkTheme ? (
          <i className="ri-linkedin-fill text-white"></i>
        ) : (
          <i className="ri-linkedin-fill text-[#005983]"></i>
        )}
        {darkTheme ? (
          <i className="ri-telegram-fill text-white"></i>
        ) : (
          <i className="ri-telegram-fill text-[#1C88BD]"></i>
        )}
      </div>
      <div
        className={`py-10 pt-0 lg:px-20 lg:pt-5 ${
          darkTheme ? "bg-[#1C1C1C] text-white" : "bg-white text-black"
        }`}
      >
        <div
          className={`px-6 py-10 pt-20 ${
            darkTheme ? "bg-[#1C1C1C] text-white" : "bg-white text-black"
          } lg:flex lg:flex-row lg:justify-start lg:items-start lg:gap-x-11`}
        >
          <div className="lg:w-[70%]">
            <p className="text-[13px] pb-5">
              Home » All posts » {blogs.category} » {blogs.title}
            </p>

            <div
              className={`px-4 w-fit py-1 ${
                darkTheme ? "bg-white" : "bg-[#E9E9EB]"
              } rounded-md mb-5 text-black`}
            >
              <h4 className="text-[10px]">{blogs.category}</h4>
            </div>

            <h1 className="text-4xl font-bold">{blogs.title}</h1>

            <div className="flex items-center gap-x-1 text-[10px] py-5">
              <p className="flex gap-x-1">
                By <span className="font-semibold">{blogs.authorname}</span>
              </p>
              <div
                className={`w-5 h-[1px] ${darkTheme ? "bg-white" : "bg-black"}`}
              ></div>
              <i className="ri-time-line"></i>
              <p>{blogs.read || 3} minute read</p>
            </div>

            <img
              src={blogs.imageUrl}
              alt=""
              className="w-full h-96 object-cover mb-5 rounded-md"
            />

            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blogs.content }}
            />

            <div
              className={`about mt-5 ${
                darkTheme ? "bg-[#1C1C1C]" : "bg-white"
              } w-full h-fit border py-10 border-zinc-400 flex flex-col items-center sm:items-start sm:px-10`}
            >
              <img
                className="w-28 h-28 rounded-full object-cover"
                src={blogs.authorImage}
                alt="Author"
              />
              <p className="mt-5">About the Author</p>
              <h1 className="text-3xl">{blogs.authorname}</h1>
              <h4 className="text-[10px]">{blogs.postCounts} posts</h4>
              <h4 className="text-[10px]">{blogs.authoremail}</h4>
            </div>
          </div>
          <div className="lg:w-[30%]">
            <div
              className={`${
                darkTheme ? "bg-[#272727]" : "bg-white border border-zinc-400"
              } flex gap-x-10 lg:mt-0 mt-5 px-5 py-3 text-2xl`}
            >
              <i className="ri-facebook-circle-fill"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-linkedin-fill"></i>
              <i className="ri-tiktok-fill"></i>
            </div>
            <div className="search mt-5">
              <h1 className="text-2xl">Search</h1>
              <div className="flex mt-2">
                <input
                  className={`outline-none border w-[70%] px-5 ${
                    darkTheme ? "bg-[#292929]" : "bg-white"
                  } py-2 border-zinc-700 rounded-tl-md rounded-bl-md`}
                  type="text"
                />
                <button
                  className={`${
                    darkTheme
                      ? "bg-[#292929]"
                      : "bg-white border border-zinc-700 border-l-0"
                  } lg:px-5 w-[30%] px-10 py-2 rounded-tr-md rounded-br-md`}
                >
                  <h4>SEARCH</h4>
                </button>
              </div>
            </div>
            <div className="cards flex mt-10 flex-col gap-y-5">
              {sideCards.slice(0,4).map((item, index) => {
                return (
                  <Link key={index} to={`/blogcard/${item._id}`}>
                    <div
                      style={{
                        backgroundColor: image ? "bg-[#212121]" : "",
                        backgroundImage: image ? `` : "",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundImage = ``;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundImage = "";
                      }}
                      className={`w-full ${
                        darkTheme ? "bg-[#212121]" : "bg-white shadow-md "
                      } px-3 py-3 h-32 bg-center bg-cover transition-all duration-300`}
                    >
                      <h1 className="truncate">{item.title}</h1>
                      <p className="truncate">{item.description}</p>
                      <div className="flex mt-4 gap-x-2 items-center text-[10px]">
                        <p>
                  {new Date(item.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    })}
                  </p>
                        <div className="w-8 h-[.5px] bg-white"></div>
                        <div className="flex items-center">
                          <i className="ri-time-line"></i>
                          <p>{item.read} minutes read</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div ref={categoryRef} className="flex flex-col sticky top-0 gap-y-3 mt-5">
            {categories.map((cat, index) => (
              <Link to={`/category/${cat.name}`} key={index}>
                <div
                  className={`w-full group h-20 ${
                    darkTheme
                      ? "bg-[#272727]"
                      : "bg-white text-black border-zinc-700 border"
                  } flex items-center justify-between px-5`}
                >
                  <h1 className="text-[10px]">{cat.name.toUpperCase()}</h1>
                  <div className="w-10 h-5 overflow-hidden relative flex items-center justify-center gap-y-0">
                    <i className="ri-arrow-right-line translate-y-full absolute group-hover:-translate-y-0 transition-all duration-300"></i>
                    <h1 className="group-hover:-translate-y-full transition-all duration-300">
  {
    cat.name === "Asia"
      ? category[0].asia.length
      : cat.name === "Africa"
      ? category[0].africa.length
      : cat.name === "Europe"
      ? category[0].europe.length
      : cat.name === "Oceania"
      ? category[0].oceania.length
      : cat.name === "North America"
      ? category[0].northamerica.length
      : cat.name === "South America"
      ? category[0].southamerica.length
      : 0
  }
</h1>

                  </div>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-10 px-8 sm:px-16 gap-5 xl:gap-10">
          <BlogCard darkTheme={darkTheme} />
        </div>
      </div>
    </>
  );
}

export default BlogDetail;