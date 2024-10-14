import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

// app configuration
const app = express();
const port = process.env.PORT || 4000;

// Connect to the database
connectDb();

// connect to cloudinary
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// API endpoints
app.get("/", (req, res) => {
  res.send("API is working");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
