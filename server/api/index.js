require("dotenv").config({ path: require("path").resolve(__dirname, "../.env") });
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./config/connectDB");
const { verifyToken } = require("./middlewares/authMiddleware");
const router = require("./routes/router");

const app = express();

// Connect DB
db();

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Routes
app.get("/admin", verifyToken, (req, res) => {
  res.send("Admin");
});
app.use("/api", router);

// ❌ REMOVE: app.listen(3000)
// ✅ Instead, export for Vercel
module.exports = app;
