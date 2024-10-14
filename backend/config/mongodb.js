import mongoose from "mongoose";
import "dotenv/config";


const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  });
  await mongoose.connect(`${process.env.MONGODB_URL}`);
};

export default connectDb;
