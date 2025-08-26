// models/Category.js
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { type: String },
  description: { type: String},
  southamerica:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"BlogCard"
  }],
  africa:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"BlogCard"
  }],
  oceania:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"BlogCard"
    }
  ],
  northamerica:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"BlogCard"
  }],
  europe:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"BlogCard"
  }],
  asia:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"BlogCard"
  }]
});

module.exports = mongoose.model("Category", categorySchema);
