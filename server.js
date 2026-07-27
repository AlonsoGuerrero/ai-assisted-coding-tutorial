const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello world from Express" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Ana" },
    { id: 2, name: "Luis" },
    { id: 3, name: "María" },
    { id: 4, name: "Carlos" },
    { id: 5, name: "Sofía" },
  ]);
});

app.post("/api/users", (req, res) => {
  const { name } = req.body || {};

  if (typeof name !== "string" || !name.trim()) {
    return res.status(400).json({ error: "The name is required" });
  }

  res.status(201).json({ id: 3, name: name.trim() });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
