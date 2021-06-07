const express = require("express");
const colors = require("colors");
const contact = require("./backend/routes/api/contact");
const sqlconnection = require("./backend/routes/api/sqlconnection");
const path = require("path");
require("dotenv").config();

const app = express();

//body parser

app.use(express.json({ extented: true }));

//Run api server and frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  //main route

  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

//other routes
app.use("/api/contact", contact);
app.use("/api/sqlconnection", sqlconnection);

//define a port

const PORT = process.env.PORT || 5000;

//run a server

app.listen(PORT, () =>
  console.log(`Server is listening on Port ${PORT}`.cyan.inverse.bold)
);
