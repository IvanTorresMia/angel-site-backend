var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const path = require("path");

/* GET home page. */
// If no API routes are hit, send the React app
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
