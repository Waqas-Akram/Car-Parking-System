const express = require("express");
const { createPool } = require("mysql");

const router = express.Router();

const pool = createPool({
  host: "sql6.freesqldatabase.com",
  user: "sql6418689",
  password: "keADUqGCwu",
  database: "sql6418689",
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

//delete user by using it's id

router.delete("/delete/:id", async (req, res) => {
  await pool.query(
    "DELETE from Registrations where id = ?",
    req.params.id,
    (err, rows) => {
      if (err) throw err;
      res.status(200).json({ msg: "Successfull deleted" });
    }
  );
});

//update user by using it's id

router.put("/registrations/update/:id", async (req, res) => {
  const { Name, RFID } = req.body;
  await pool.query(
    "UPDATE Registrations SET Name = ? , RFID = ? WHERE id = ?",
    [Name, RFID, req.params.id],
    (err, rows) => {
      if (err) throw err;
      res.status(200).json({ msg: "Successfull updated" });
    }
  );
});

//get single user by id

router.get("/registrations/:id", async (req, res) => {
  await pool.query(
    "SELECT * from Registrations where id = ?",
    req.params.id,
    (err, rows) => {
      if (err) throw err;
      res.json(rows[0]);
    }
  );
});

//get data from Slots

router.get("/slots", async (req, res) => {
  await pool.query("SELECT * from Slots", (err, rows) => {
    if (err) throw err;
    res.json(rows[0]);
  });
});

//post data in registration table with

router.post("/register", async (req, res) => {
  const { Name, RFID } = req.body;
  await pool.query(
    `INSERT INTO Registrations (Name , RFID , Status) VALUES (? , ? , ?)`,
    [Name, RFID, "0"],
    (err, rows) => {
      if (err) throw err;
      res.json(rows);
    }
  );
});

module.exports = router;
