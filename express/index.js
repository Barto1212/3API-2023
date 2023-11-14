import express from "express";
const app = express();

app.use(express.json());

app.post("/api/article", (req, res) => {
  res.sendStatus(200);
});
app.get("/api/article", (req, res) => {
  res.sendStatus(200);
});
app.put("/api/article", (req, res) => {
  res.sendStatus(200);
});
app.delete("/api/article", (req, res) => {
  res.sendStatus(200);
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
