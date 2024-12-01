import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import blogRouter from "./routes/blogRouter.js";

// App configuration
const app = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(morgan("combined"));
// Connect to the database
connectDb();

// Connect to Cloudinary

connectCloudinary()
  .then(() => console.log("Cloudinary is ready!"))
  .catch((err) => console.error("Cloudinary connection failed:", err));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/blogs", blogRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ success: false, message: `Something went wrong! ${err}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Graceful Shutdown
process.on("SIGTERM", () => {
  app.close(() => {
    console.log("Process terminated");
    connectDb().close(() => console.log("Database connection closed"));
  });
});
