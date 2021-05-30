const express = require("express");
const colors = require("colors");
const contact = require("./backend/routes/api/contact");
require("dotenv").config();

const app = express();

//body parser

app.use(express.json({ extented: true }));

//main route

app.get("/", (req, res) => {
  res.json({ msg: "Api is rinning" });
});

//other routes
app.use("/api/contact", contact);

//define a port

const PORT = process.env.PORT || 5000;

//run a server

app.listen(PORT, () =>
  console.log(`Server is listening on Port ${PORT}`.cyan.inverse.bold)
);
