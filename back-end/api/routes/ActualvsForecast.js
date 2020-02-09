const express = require('express');
const router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "loco4217",
  database: "energymarket"
});

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /ActualvsForecast'
    });
    con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
});

router.post('/', (req, res, next) => {
    const ActualvsForecast = {
        name: req.body.name,
        price: req.body.price  //change itttttttttttttttt
    }
    res.status(200).json({
        message: 'Handling POST requests to kostas /ActualvsForecast',
        createdActualvsForecast: ActualvsForecast
    });
});

module.exports = router;