import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async (retries = 3) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  let attempt = 0;

  while (attempt < retries) {
    try {
      console.log(`Attempt ${attempt + 1} to connect to Cloudinary...`);
      const response = await cloudinary.api.ping();
      console.log("Cloudinary connection successful:", response);
      return response;
    } catch (error) {
      attempt++;
      if (error.code === "ETIMEDOUT" && attempt < retries) {
        console.warn(
          `Connection timed out. Retrying (${attempt}/${retries})...`
        );
        continue;
      }
      console.error("Failed to connect to Cloudinary:", error.message);
      throw error;
    }
  }
};

export default connectCloudinary;
