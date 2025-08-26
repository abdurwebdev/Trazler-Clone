const mongoose = require("mongoose");

const BlogCardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    imageUrl: {
      type: String,
      default: "",
    },

    // author info
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    authorname: {
      type: String,
      required: true,
    },
    authorImage: {
      type: String,
    },
    authoremail: {
      type: String,
      required: true,
    },

    // scheduling
    scheduledAt: {
      type: Date,
      default: null,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },

    // category (for quick filtering in blogcard route)
    category: {
      type: String,
      enum: [
        "Asia",
        "Africa",
        "Europe",
        "Oceania",
        "South America",
        "North America",
        "Other",
      ],
      default: "Other",
    },

    // soft delete flag
    deletedPost: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogCard", BlogCardSchema);
