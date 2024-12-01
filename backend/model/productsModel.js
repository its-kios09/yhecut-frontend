import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [Buffer], required: true },
  category: { type: String, required: true },
  size: { type: [String], required: true },
  bestseller: { type: Boolean },
  color: { type: [String] },
  date: { type: Date, required: true },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
