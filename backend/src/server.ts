import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { router } from "./routes";
import cors from "cors";

const app = express();

mongoose.connect("mongodb://localhost:27017/swstarter-events");

app.use(bodyParser.json());
app.use(cors());

app.use(router);

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
