var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
 res.json({ data: "I am Alive "})
});

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// })

// router.get("/message", (req, res) => {
//   res.json({ response: "I am alive" })
// });


// router.use(express.static('client/build'));
// router.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'client','build','index.html'))
// })

module.exports = router;
