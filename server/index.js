const PORT = 8000;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("Hello to Tinder!");
});

// app.get("/", (req, res) => {
//   res.json("Hello to Tinder!");
// });

app.listen(PORT, () => console.log("Server running on PORT " + PORT));
