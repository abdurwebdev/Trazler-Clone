import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryDetail from "./pages/CategoryDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import DeletePage from "./pages/DeletePage";
import EditBlog from "./pages/EditBlog";
import EditPage from "./pages/EditPage";
import AllBlogs from "./pages/AllBlogs";
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routes>
        <Route
          path="/"
          element={<Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />}
        />
        <Route
          path="/blog/:id"
          element={
            <BlogDetail darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          }
        />
        <Route
          path="/allblogs"
          element={
            <AllBlogs darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          }
        />
        <Route
          path="/category/:name"
          element={
            <CategoryDetail darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          }
        />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/register" element={<Register darkTheme={darkTheme} />} />
        <Route path="/login" element={<Login darkTheme={darkTheme} />} />
        <Route
          path="/admindashboard"
          element={<AdminDashboard darkTheme={darkTheme} />}
        />
        <Route
          path="/deletepage"
          element={<DeletePage darkTheme={darkTheme} />}
        />
        <Route path="/editblog" element={<EditBlog darkTheme={darkTheme} />} />
        <Route
          path="/editblog/edit/:id"
          element={<EditPage darkTheme={darkTheme} />}
        />
      </Routes>
      <Footer darkTheme={darkTheme} />
    </>
  );
}

export default App;
