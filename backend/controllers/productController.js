import { v2 as cloudinary } from "cloudinary";
import productModel from "../model/productsModel.js";
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, bestseller } = req.body;

    const color = Array.isArray(req.body.color)
      ? req.body.color
      : JSON.parse(req.body.color || "[]");
    const size = Array.isArray(req.body.size)
      ? req.body.size
      : JSON.parse(req.body.size || "[]");

    const images = [
      req.files.image1 && req.files.image1[0],
      req.files.image2 && req.files.image2[0],
      req.files.image3 && req.files.image3[0],
      req.files.image4 && req.files.image4[0],
    ].filter(Boolean);

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      size,
      bestseller: bestseller === "true",
      color,
      images: imagesUrl,
      date: new Date(),
    };

    console.log(productData);
    const product = new productModel(productData);
    await product.save();

    res.status(200).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error("Error in addProduct:", error);
    res.status(500).json({
      success: false,
      message: `Something went wrong! Details: ${error.message}`,
    });
  }
};

const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    if (products.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No products found. Please add some products.",
        products: [],
      });
    }
    res.status(200).json({
      success: true,
      message: "Products have successfully loaded.",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: `Server error. ${error}` });
  }
};

const removeProduct = async (req, res) => {
  try {
    const product = await productModel.findById(req.body.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found. Please check the ID and try again.",
      });
    }

    await productModel.findByIdAndDelete(req.body.id);
    res.status(200).json({
      success: true,
      message: "Product has been successfully removed.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: `Server error. ${error}` });
  }
};

const getProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found. Please check the ID and try again.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product has successfully loaded.",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: `Server error. ${error}` });
  }
};

export { addProduct, listProduct, removeProduct, getProduct };
