import React from "react";
import { useParams } from "react-router-dom";
function Category() {
  const { id } = useParams();
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
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      textone: "north-america",
      texttwo: "view posts",
    },
    {
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      textone: "south-america",
      texttwo: "view posts",
    },
  ];
  const blog = data[id];
  return (
    <>
      <img src={blog.image} alt="" />
      <h1>{blog.textone}</h1>
      <h1>{blog.texttwo}</h1>
    </>
  );
}

export default Category;
