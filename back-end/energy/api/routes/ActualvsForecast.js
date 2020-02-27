const express = require('express');
const router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "loco4217",
  database: "energymarket"
});

router.post('/:Pasxa', (req, res, next) => {
    var pasxa = req.params.Pasxa;
    /*res.status(200).json({
        message: 'Handling GET requests to /ActualvsForecast'
    });*/
    con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM users where userid = ?";
  con.query(sql, pasxa, function (err, result, fields) {
    if (err) throw err;
    res.status(200).json({
        result
         })
  });
});
});

router.get('/', (req, res, next) => {
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