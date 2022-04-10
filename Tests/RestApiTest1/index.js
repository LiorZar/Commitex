const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>hi oshrat</h1>");
});

app.get("/GetPlayers", (req, res) => {
  // go to database collect all player
  var players = ["lior", "oran", "arbel", "refael"];
  res.send(players);
});

app.listen(5050, () => {});
