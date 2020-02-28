const express = require('express');
const router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "loco4217",
  database: "energymarket"
});

router.post('/', (req, res, next) => {
   var username = req.body.username;
   var password = req.body.password;
   var quota = req.body.quota;
   var email = req.body.email;
   var apikey = 133;
  if (username && password) {
    con.query('INSERT INTO users (user_name, pass_word, email, quota, apikey) VALUES (?,?,?,?,?)', [username, password, email, quota, apikey], function(error, results, fields) {
      //quotas sth bash
        res.status(200).json({
          message: 'User added successfuly.'
        })   
      res.end();
    });
  } else {
    res.send('Please enter Username and Password!');
    res.end();
  }
});

router.get('/:username', (req, res, next) => {
    var userName = req.params.username;
    con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM users where user_name = ?";
  con.query(sql, userName, function (err, result, fields) {
    if (err) throw err;
    res.status(200).json({
        result
         })
  });
});
});

router.put('/:username', (req, res, next) => {
    var oldusername = req.params.username;
    var newuserName = req.body.username;
    var newpassword = req.body.password;
    var newemail = req.body.email;
    var newquota = req.body.quota;
    con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "UPDATE users SET user_name = ?, pass_word = ?, email = ?, quota = ? WHERE user_name = ?";
  con.query(sql, [newuserName,newpassword,newemail,newquota,oldusername], function (err, result, fields) {
    if (err) throw err;
    res.status(200).json({
        result
         })
  });
});
});


module.exports = router;