var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const path = require("path");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// })

// router.get("/message", (req, res) => {
//   res.json({ response: "I am alive" })
// });


app.use(express.static('client/build'));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

module.exports = router;
