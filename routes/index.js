var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const { path } = require('../app');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.json({data:  "hello world"});
// });

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
})

module.exports = router;
