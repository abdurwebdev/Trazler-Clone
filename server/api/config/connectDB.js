const mongoose = require("mongoose");

const connectDB = async () => {


  if (!process.env.MONGO_URI) {
    throw new Error("❌ MONGO_URI is missing in environment variables!");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ Connection Failed:", err.message);
  }
};

module.exports = connectDB;
