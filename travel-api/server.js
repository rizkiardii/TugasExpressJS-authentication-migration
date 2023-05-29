const express = require("express");
const app = express();

// Middleware untuk memparsing body request
app.use(express.json());

// Router
app.get("/", (req, res) => {
  res.send("Selamat datang di Travel API!");
});

// Mengatur port server
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
