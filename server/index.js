const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cron = require("node-cron");
const db = require("./config/connectDB");
const BlogCard = require("./models/BlogCard");
const router = require("./routes/router");
const { verifyToken } = require("./middlewares/authMiddleware");

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
    await connectToMongo(); // reuse connection function
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
app.use("/api", async (req, res, next) => {
  await connectToMongo();
  next();
}, router);

app.get("/admin", verifyToken, (req, res) => {
  res.send("Admin");
});

// ---------- cron jobs (⚠️ IMPORTANT) ----------
/**
 * Note: Vercel serverless functions **do not keep a running process**.
 * That means `node-cron` will NOT run continuously like on a normal server.
 * To run scheduled tasks in Vercel, you must use Vercel’s "Cron Jobs"
 * (set up in the Vercel dashboard). Each cron execution will invoke this function.
 */
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

app.listen(process.env.PORT,()=>{
  console.log(`Server running on ${PORT}`)
})
