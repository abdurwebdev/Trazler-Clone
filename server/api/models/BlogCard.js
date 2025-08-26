// models/BlogCard.js
const mongoose = require("mongoose");

const blogCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true }, // New: for Quill HTML
  category: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  imageUrl: { type: String, required: true },
  authorname: { type: String, required: true },
  authorImage: { type: String, required: true },
  authoremail: { type: String, required: true },
  read: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  deletedPost: { type: Boolean, default: false },
  scheduledAt: { type: Date },
  isPublished: { type: Boolean, default: false },
});

module.exports = mongoose.model("BlogCard", blogCardSchema);