const express = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "loco4217",
  database: "energymarket"
});

const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /AGPT'
    });
    con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DROP TABLE customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
});

router.post('/', (req, res, next) => {
    const AGPT = {
        name: req.body.name,
        price: req.body.price  //change itttttttttttttttt
    }
    res.status(200).json({
        message: 'Handling POST requests to /AGPT',
        createdAGPT: AGPT
    });
});

module.exports = router;