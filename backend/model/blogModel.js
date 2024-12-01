import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  size: { type: [String], default: [] },
  bestseller: { type: Boolean, default: false },
  color: { type: [String], default: [] },
  images: { type: [String], default: [] }, // Array of image URLs
  date: { type: Date, default: Date.now },
});

const productModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;
