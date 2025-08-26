const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  imageUrl: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogCard",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
