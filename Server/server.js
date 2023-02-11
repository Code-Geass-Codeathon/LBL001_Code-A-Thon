import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/connect.js";

/* CONFIGURATIONS */
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* MONGOOSE SETUP */
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
