const express = require("express");
const { createPool } = require("mysql");

const router = express.Router();

const pool = createPool({
  host: "sql6.freesqldatabase.com",
  user: "sql6417218",
  password: "cMzE8wtLnP",
  database: "sql6417218",
  connectionLimit: 10,
});

//get all registered_users

router.get("/registrations", async (req, res) => {
  await pool.query("SELECT * from Registrations", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

//get all time_stamps of car

router.get("/timestamps", async (req, res) => {
  await pool.query("SELECT * from LogTable", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

module.exports = router;