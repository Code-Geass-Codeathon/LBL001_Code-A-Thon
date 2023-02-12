//importing external modules
import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

//importing internal modules
import connect from "./database/connect.js";

// MOUDLE SETUP
const app = express();
app.use(express.json());
dotenv.config();
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// CONNECTING DB WITH APPLICATION
const PORT = process.env.PORT || 6001;

connect()
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `Server is successfully running on Port: http://localhost:${PORT}`
      )
    );
  })
  .catch((error) => console.log(`\nDatabase connection failed: ${error}`));
