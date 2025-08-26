// routes/router.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { registerValidator } = require("../validators/registerValidator");
const { loginValidator } = require("../validators/loginValidator");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../middlewares/authMiddleware");
const { blogValidator } = require("../validators/blogValidator");
const BlogCard = require("../models/BlogCard");
const Category = require("../models/Category")

router.post("/register", (req, res) => {
  let { username, email, password, imageUrl } = registerValidator.parse(
    req.body
  );
  try {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        await User.create({
          username,
          email,
          password: hash,
          imageUrl,
        });
      });
    });
    res.status(200).json({ message: "Login Successful!" });
  } catch (error) {
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  let { email, password } = loginValidator.parse(req.body);
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Login Failed" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Login Failed" });
    const payload = {
      id: user._id,
      email: user.email,
      username: user.username,
      imageUrl: user.imageUrl,
      posts: user.posts,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: "36000000",
    });
    res.status(200).json({ message: "Login Successful!" });
  } catch (error) {
    if (error.errors === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/checkAuth", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json({ loggedIn: false });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.json({ loggedIn: false });
    res.json({ loggedIn: true, user: decoded });
  });
});


router.get("/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "strict" });
  res.json({ message: "Logged out" });
});


router.get("/admin", verifyToken, (req, res) => {
  const token = req.cookies.token;
  let decoded = jwt.verify(token, process.env.JWT_SECRET);
  res.send(decoded);
});

router.post("/createblog", verifyToken, async (req, res) => {
  try {
    const { category } = req.body;
    let validatedData = blogValidator.parse(req.body);
    const scheduledAt = req.body.scheduledAt ? new Date(req.body.scheduledAt) : null;
    const isPublished = scheduledAt && scheduledAt > new Date() ? false : true;

    let CurrentUser = await User.findById(req.user.id);
    let createdBlog = await BlogCard.create({
      ...validatedData,
      author: CurrentUser.id,
      authorname: CurrentUser.username,
      authorImage: CurrentUser.imageUrl,
      authoremail: CurrentUser.email,
      scheduledAt,
      isPublished,
    });

    let user = await User.findById(CurrentUser.id);
    user.posts.push(createdBlog._id);
    await user.save();
    let categoryDoc = await Category.findOne();
    if (!categoryDoc) {
      categoryDoc = await Category.create({});
    }
    if (category === 'Asia') {
      categoryDoc.asia.push(createdBlog._id);
    } else if (category === 'Africa') {
      categoryDoc.africa.push(createdBlog._id);
    } else if (category === 'Europe') {
      categoryDoc.europe.push(createdBlog._id);
    } else if (category === 'Oceania') {
      categoryDoc.oceania.push(createdBlog._id);
    } else if (category === 'South America') {
      categoryDoc.southamerica.push(createdBlog._id);
    }
    await categoryDoc.save();
    res.status(200).json({ message: "Blog Created Successfully" });
  } catch (error) {
    console.error(error);
    if (error.name === "ZodError") {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/softdelete/:id", verifyToken, async (req, res) => {
  let { id } = req.params;
  try {
    let softDeleted = await BlogCard.findByIdAndUpdate(id, {
      deletedPost: true
    })
    res.status(200).json(softDeleted);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
})

router.get("/category", async (req, res) => {
  try {
    let category = await Category.find();
    res.status(200).json(category)
  }
  catch (err) {
    res.status.json({ message: "Internal server Errror" })
  }
})

router.get("/blogcard", async (req, res) => {
  try {
    const { category } = req.query; // Get category from query parameter
    let query = { isPublished: true }; // Only fetch published posts
    if (category) {
      query.category = category; // Filter by category if provided
    }
    let blogs = await BlogCard.find(query).populate("author", "username email");
    res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/me", verifyToken, async (req, res) => {
  try {
    let id = req.user.id;
    let user = await User.findById(id).populate("posts");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/deleteblogcard", verifyToken, async (req, res) => {
  try {
    let blogs = await BlogCard.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});


router.post("/delete/:id", verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    let userPost = await User.findByIdAndUpdate(userId, {
      $pull: { posts: id },
    });
    let deleted = await BlogCard.findOneAndDelete({ _id: id });
    userPost.deletedPost = true;
    res.status(200).json({ message: "Blog Deleted Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/blogcard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let blogs = await BlogCard.findOne({ _id: id, isPublished: true }).populate(
      "author",
      "username email"
    );
    if (!blogs) {
      return res.status(404).json({ message: "Blog not found or not published" });
    }
    const postCounts = await BlogCard.countDocuments({author:blogs.author._id})
    res.status(200).json({ ...blogs.toObject(), postCounts });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/getblog/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let blog = await BlogCard.findById({ _id: id });
    res.status(200).json({ blog, message: "Blog Found!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/edit", verifyToken, async (req, res) => {
  const decoded = req.user;
  try {
    let post = await User.findOne({ _id: decoded.id }).populate("posts");
    res.status(200).json(post.posts);
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
})

router.put("/edit/:id", verifyToken, async (req, res) => {
  const { id } = req.params;

  try {
    // Validate incoming blog data
    const validatedData = blogValidator.parse(req.body);
    const scheduledAt = req.body.scheduledAt ? new Date(req.body.scheduledAt) : null;
    const isPublished = scheduledAt && scheduledAt > new Date() ? false : true;

    // Get the logged-in user details
    const CurrentUser = await User.findById(req.user.id);

    if (!CurrentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update blog with validated data + author details
    const updatedBlog = await BlogCard.findByIdAndUpdate(
      id,
      {
        ...validatedData,
        author: CurrentUser.id,
        authorname: CurrentUser.username,
        authorImage: CurrentUser.imageUrl,
        authoremail: CurrentUser.email,
        scheduledAt,
        isPublished,
      },
      { new: true, runValidators: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({
      message: "Blog Updated Successfully",
      blog: updatedBlog
    });

  } catch (error) {
    console.error("Error updating blog:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Validation failed", errors: error.errors });
    }
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/restore/:id", async (req, res) => {
  try {
    const blog = await BlogCard.findByIdAndUpdate(
      req.params.id,
      { $set: { deletedPost: false } }, // use $set explicitly
      { new: true } // return the updated doc
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (err) {
    console.error("Restore error:", err);
    res.status(500).json({ error: "Failed to restore blog" });
  }
});



module.exports = router;