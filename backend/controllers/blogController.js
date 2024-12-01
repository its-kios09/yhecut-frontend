// controllers/blogController.js
import { v2 as cloudinary } from "cloudinary";
import blogModel from "../model/blogModel.js";
const addBlog = async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];

    const images = [image1, image2].filter((item) => item != undefined);

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const blogData = {
      title,
      content,
      author,
      tags: tags ? tags.split(",") : [],
      images: imagesUrl,
    };

    const blog = new blogModel(blogData);
    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog post successfully created.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: `Server error. ${error}` });
  }
};

const listBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({});
    res.status(200).json({
      success: true,
      message: "Blogs loaded successfully.",
      blogs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: `Server error. ${error}` });
  }
};

const getBlog = async (req, res) => {
  try {
    const { blogId } = req.body;
    const blog = await blogModel.findById(blogId);
    res.status(200).json({
      success: true,
      message: "Blog post loaded successfully.",
      blog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: `Server error. ${error}` });
  }
};

const removeBlog = async (req, res) => {
  try {
    await blogModel.findByIdAndDelete(req.body.id);
    res.status(200).json({
      success: true,
      message: "Blog post removed successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: `Server error. ${error}` });
  }
};

export { addBlog, getBlog, listBlogs, removeBlog };
