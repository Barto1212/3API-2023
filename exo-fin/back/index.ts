import express from "express";
import { connectDB } from "./utils/connectDB";
import { getPost } from "./controlers/getPost";
import "dotenv/config";
import cors from "cors";

connectDB();

const app = express();
app.use(cors());

app.get("/post", getPost);

app.listen(5000, () => console.log("server on"));
