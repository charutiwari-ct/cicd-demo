const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from my CI/CD pipeline!", status: "ok" });
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy" });
});

module.exports = app;
