export function deleteTodo(req, res) {
  let data = "";
  req.on("data", function (chunk) {
    data += chunk.toString();
  });
  req.on("end", function () {
    const body = JSON.parse(data);
    console.log(body);

    res.writeHead(201);
    res.end("received");
  });
}
