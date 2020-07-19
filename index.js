const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3400;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "shoe_store",
});

connection.connect(err => {
  if (err) throw err;
  console.log('connection to shoe_store db success!!!');
});

app.get("/shoes", (req, res) => {
  const query = 'SELECT * FROM shoe';
  connection.query(query, (error, result) => {
    if (error) throw error;
    res.json(result);
  });
});

app.get("/shoes/:shoeId", (req, res) => {
  console.log('params: ', req.params);
  const query = `SELECT * FROM shoe WHERE id=${req.params.shoeId}`;
  connection.query(query, (error, result) => {
    if (error) throw error;
    res.json(result);
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
