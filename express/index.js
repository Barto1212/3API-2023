import express from "express";
const app = express();
import { saveOneArticle } from "./bdd-articles/saveOneArticle.js";
import { getAllArticles } from "./bdd-articles/getAllArticles.js";
import { deleteOneArticle } from "./bdd-articles/deleteOneArticle.js";
import { saveOneArticleToCart } from "./bdd-cart/saveOneArticle.js";
import { getAllCardArticles } from "./bdd-cart/getAllArticles.js";

app.use(express.json());

app.post("/api/article", async (req, res) => {
  const newArticle = req.body;
  if (!(newArticle.name && newArticle.description && newArticle.price)) {
    return res.sendStatus(400);
  }
  await saveOneArticle(newArticle);
  res.sendStatus(201);
});
app.get("/api/article", async (req, res) => {
  const articles = await getAllArticles();
  res.send(articles);
});
app.get("/api/article/:id", async (req, res) => {
  const id = req.params.id;
  const articles = await getAllArticles();
  const article = articles.find((art) => art.id == id);
  if (!article) res.sendStatus(404);
  res.send(article);
});
app.delete("/api/article/:id", async (req, res) => {
  try {
    await deleteOneArticle(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(404);
  }
});
app.patch("/api/cart/:articleId", async (req, res) => {
  const { articleId } = req.params;
  const articles = await getAllArticles();
  const article = articles.find((art) => art.id == articleId);
  if (!article) return res.sendStatus(404);
  await saveOneArticleToCart(article);
  res.sendStatus(201);
});
app.get("/api/cart/ammount", async (req, res) => {
  const cardArticles = await getAllCardArticles()
  const amount = cardArticles.reduce(
    (accumulator, article) => accumulator + article.price,
    0
  )
  res.send({amount: amount})
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
