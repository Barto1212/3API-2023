import express from "express";
import { Server } from "socket.io";
import http from "http";
import fs from "fs/promises";

const app = express();
app.use(express.static("public"));
const monServer = http.createServer(app);

monServer.listen(3000, () => console.log("server on"));
