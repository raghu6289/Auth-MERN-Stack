import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI);
    // console.log(`mongodb connected: ${conn.connection.host}`);
    const conn = await mongoose.createConnection(process.env.MONGO_URI);
  } catch (error) {
    console.log(error.message);
    process.exit(1); // 1 failure, 0 is success
  }
};
