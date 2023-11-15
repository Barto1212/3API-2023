import express from "express";
import cartRoutes from './routes/cart.routes.js'
import articleRoutes from "./routes/articles.routes.js";

const app = express();
app.use(express.json());
app.use("/api/article", articleRoutes);
app.use("/api/cart", cartRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
