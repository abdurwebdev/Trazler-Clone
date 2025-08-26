const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cron = require("node-cron");
const serverless = require("serverless-http"); // important for Vercel

const db = require("./config/connectDB");
const BlogCard = require("./models/BlogCard");
const router = require("./routes/router");
const { verifyToken } = require("./middlewares/authMiddleware");

// ---------- DEBUG ENV ----------
console.log("🔎 Debugging ENV variables:");
console.log("MONGO_URI:", process.env.MONGO_URI ? "✅ Loaded" : "❌ Missing");
console.log("CLIENT_URL:", process.env.CLIENT_URL || "(not set)");

// ---------- connect immediately (local dev) ----------
db();

const app = express();

// ---------- middlewares ----------
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.get("/api/test-db", async (req, res) => {
  try {
    await connectToMongo();
    res.json({ success: true, message: "MongoDB connected!" });
  } catch (err) {
    console.error("MongoDB connection error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ---------- connect DB (reuse pattern for serverless) ----------
let isConnected = false;
async function connectToMongo() {
  if (isConnected) return;
  await db(); // your connectDB.js should return mongoose.connect(...)
  isConnected = true;
}

// ---------- routes ----------
app.use(
  "/api",
  async (req, res, next) => {
    await connectToMongo();
    next();
  },
  router
);

app.get("/admin", verifyToken, (req, res) => {
  res.send("Admin");
});

// ---------- cron jobs ----------
cron.schedule("* * * * *", async () => {
  try {
    const now = new Date();
    const postsToPublish = await BlogCard.updateMany(
      { scheduledAt: { $lte: now }, isPublished: false },
      { $set: { isPublished: true } }
    );
    if (postsToPublish.modifiedCount > 0) {
      console.log(`${postsToPublish.modifiedCount} posts published.`);
    }
  } catch (error) {
    console.error("Error publishing scheduled posts:", error);
  }
});

// ---------- export for Vercel ----------
module.exports = serverless(app);
