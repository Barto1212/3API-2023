import express from "express";
const PORT = 3000;

const users = [
    {name: "Loic", id: 1},
    {name: "Mael", id: 2},
    {name: "Francois", id: 4}
]

const app = express();
app.use(express.json());


//     
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
});

//

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
