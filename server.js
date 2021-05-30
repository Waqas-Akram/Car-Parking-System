const express = require("express");
const colors = require("colors");
require("dotenv").config();

const app = express();

//body parser

app.use(express.json({ extented: true }));

//main route

app.get("/", (req, res) => {
  res.json({ msg: "Api is rinning" });
});

//define a port

const PORT = process.env.PORT || 5000;

//run a server

app.listen(PORT, () =>
  console.log(`Server is listening on Port ${PORT}`.cyan.inverse.bold)
);
