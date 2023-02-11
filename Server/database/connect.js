import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const FINAL_URL = process.env.MONGO_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

async function connect() {
  mongoose.set("strictQuery", true);

  const successful_connection = await mongoose.connect(FINAL_URL);
  console.log("\nDatabase Connected!!");

  return successful_connection;
}

export default connect;
