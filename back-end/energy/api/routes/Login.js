const express = require('express');
const router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "loco4217",
  database: "energymarket"
});

/*router.get('/:Pasxa', (req, res, next) => {
    var pasxa = req.params.Pasxa;
    res.status(200).json({
        message: 'Handling GET requests to /ActualvsForecast'
    });
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
*/

router.post('/', (req, res, next) => {
   var username = req.body.username;
   var password = req.body.password;
  if (username && password) {
    con.query('SELECT * FROM users WHERE user_name = ? AND pass_word = ?', [username, password], function(error, results, fields) {
      if (results.length > 0) {
        res.status(200).json({
          token: 'FOO'
        })
      }
        else {
          res.send('Incorrect Username and/or Password!');
        }     
      res.end();
    });
  } else {
    res.send('Please enter Username and Password!');
    res.end();
  }
});

module.exports = router;