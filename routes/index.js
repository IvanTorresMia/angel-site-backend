var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({data:  "hello world"});
});

module.exports = router;
