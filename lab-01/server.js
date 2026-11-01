const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// 1. GET / - Home Welcome Route
app.get("/", (req, res) => {
  res.send("Welcome to the Node.js & Express.js Lab Server!");
});

// 2. GET /about - Student Identity Route (Configured for Deepika)
app.get("/about", (req, res) => {
  res.json({
    name: "K. J. Deepika",
    registrationNumber: "252U1R5065",
    section: "CSE (AI & DE)"
  });
});

// 3. GET /time - Current Time Route
app.get("/time", (req, res) => {
  res.json({
    currentTime: new Date().toISOString()
  });
});

// 4. Custom 404 Handler for Invalid Paths
app.use((req, res) => {
  res.status(404).json({
    error: "404 Not Found",
    message: "The requested path does not exist on this server."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});