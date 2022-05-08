import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(colors.america(`Database connected ${conn.connection.host}`));
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
export default connectDB;
