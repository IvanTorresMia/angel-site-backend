var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

/* GET home page. */
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
