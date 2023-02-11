import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";


/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());

app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());





const DB = process.env.MONGO_URL.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose.set('strictQuery', true)
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is successfully running on Port: ${PORT}`));

  })
  .catch((error) => console.log(`${error} did not connect`));

