import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: [String], default: [] },
  date: { type: Date, default: Date.now },
  images: { type: Array },
});

const blogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default blogModel;
