import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { router } from "./routes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3333;

const app = express();

mongoose.connect(
  process.env.MONGODB_URL ?? "mongodb://localhost:27017/swstarter-events"
);

app.use(bodyParser.json());
app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
