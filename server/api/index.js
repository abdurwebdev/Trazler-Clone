const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const serverless = require("serverless-http");
const db = require("../config/connectDB");
const BlogCard = require("../models/BlogCard");
const router = require("../routes/router");
const { verifyToken } = require("../middlewares/authMiddleware");

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

// ---------- connect DB ----------
let isConnected = false;
async function connectToMongo() {
  if (isConnected) return;
  await db();
  isConnected = true;
}

app.use("/api", async (req, res, next) => {
  await connectToMongo();
  next();
}, router);

app.get("/admin", verifyToken, (req, res) => {
  res.send("Admin");
});

app.get("/", (req, res) => {
  res.send("Working!");
});

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
