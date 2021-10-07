const express = require("express");

const app = express();
const { menu } = require("./data");

app
  .get("/", (req, res) => {
    res.json(menu)
  })
  .listen(3000, () => {
    console.log("server listing at port 3000");
  });
