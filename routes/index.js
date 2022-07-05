var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const path = require("path");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

router.get("/message", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;
