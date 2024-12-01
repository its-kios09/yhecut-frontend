import express from "express";
import {
  addBlog,
  removeBlog,
  getBlog,
  listBlogs,
} from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import { adminAuth } from "../middleware/adminAuth.js";

const blogRouter = express.Router();

blogRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  addBlog
);
blogRouter.post("/remove", adminAuth, removeBlog);
blogRouter.post("/single", getBlog);
blogRouter.get("/list", listBlogs);

export default blogRouter;
