import http from "http";
import fs from "fs";
import { getTodos } from "./getTodos.js";

const server = http.createServer(maCallback);

server.listen(3000, () => {
  console.log("en écoute sur le port 3000");
});

function maCallback(request, response) {
  // ALLOW CORS 
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
  response.setHeader("Access-Control-Allow-Credentials", true);
  // SERVEUR DES PAGES INDEX ET FORM :
  const { method, url } = request;

  if (method === "GET") {
    getTodos(request, response);
  }

  let data = "";
  if (request.method == "POST") {
    request.on("data", function (chunk) {
      data += chunk.toString();
    });
    request.on("end", function () {
      const parsedData = JSON.parse(data);
      console.log(parsedData.name, "connected");

      response.writeHead(201);
      response.end("received");
    });
  }
}
