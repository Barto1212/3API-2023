export function getTodos(req, res) {
  const todoList = ["Faire du café", "Apprendre nodejs"];
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(todoList));
}
