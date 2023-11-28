import express from "express";
import type { Request, Response } from "express";
import { controlValue } from "./middleware/controlValue";
import bcrypt from "bcrypt";

// const email_true = "kyllian.mbappe@gmail.com";
// const pwd_true = "azerty";
type User = {
  email: string;
  hashPwd: string;
};
const users: User[] = [];

const app = express();
app.use(express.json());

app.post("/login", controlValue, login);
app.post("/singin", controlValue, singin);
async function login(
  req: Request<{}, {}, { email: string; pwd: string }>,
  res: Response
) {
  const { email, pwd } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Utilisateur inconnu" });
  }
  const isTheSame = await bcrypt.compare(pwd, user.hashPwd);
  console.log(email, user);

  if (!isTheSame) {
    return res.status(401).json({ message: "Mauvais mot de passe" });
  }
  res.status(200).json({ message: "Accès autorisé" });
}
async function singin(
  req: Request<{}, {}, { email: string; pwd: string }>,
  res: Response
) {
  const { email, pwd } = req.body;
  const exist = users.some((user) => user.email === email);
  if (exist) {
    return res.status(403).json({ message: "Cet utilisateur existe déjà" });
  }
  //   const salt = await bcrypt.genSalt(10);
  const hashPwd = await bcrypt.hash(pwd, 10);
  users.push({ email, hashPwd });
  res.sendStatus(201);
}

app.listen(3000, () => console.log("server on"));
