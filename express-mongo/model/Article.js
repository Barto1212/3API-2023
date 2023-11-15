import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

const Article = mongoose.model("Article", ArticleSchema);

export { Article };
