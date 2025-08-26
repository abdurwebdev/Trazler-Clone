// models/Category.js
const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  asia: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogCard" }],
  africa: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogCard" }],
  europe: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogCard" }],
  oceania: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogCard" }],
  southamerica: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogCard" }],
  northamerica: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogCard" }],
  other: [{ type: mongoose.Schema.Types.ObjectId, ref: "BlogCard" }],
});


module.exports = mongoose.model("Category", CategorySchema);
