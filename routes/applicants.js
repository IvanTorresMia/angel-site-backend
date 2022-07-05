var express = require("express");
var router = express.Router();
var models = require("../models");
var cors = require("cors");
var authService = require("../services/auth");

router.use(cors());

router.post("/", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  console.log(req.body);
  models.applicants
    .create({
      FirstName: req.body.firstName,
      LastName: req.body.lastName,
      PhoneNumber: req.body.phoneNumber,
      Height: req.body.height,
      weight: req.body.weight,
      GoalWeight: req.body.goalWeight,
      GoalDescription: req.body.goalDescription,
      Program: req.body.program,
    })
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
      res.statusMessage(err);
    });
});

router.get("/", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  models.applicants
    .findAll()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.status(500).send();
      res.statusMessage(err);
    });
});

router.get("/:id", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  let id = req.params.id
  console.log(id)
    models.applicants.findAll({
        where: {
            ApplicantId: id
        }
    }).then(response => {
        res.json(response[0])
    }).catch(err => {
        res.json(err)
    })

});



// router.post("/signup", (req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     console.log(res.body.Email)
//   models.users
//     .findOrCreate({
//       where: {
//         Email: req.body.Email,
//       },
//       defaults: {
//         FirstName: req.body.FirstName,
//         LastName: req.body.LastName,
//         Email: req.body.Email,
//         Password: authService.hashPassword(req.body.Password),
//         // Password: req.body.Password,
//         admin: req.body.admin,
//       },
//     }).then(response => {
//       res.json(response)
//     }).catch(err => {
//       res.send(err)
//     })
//     // spread((result, created) => {
//     //   if (created) {
//     //     res.send("User successfully created");
//     //   } else {
//     //     res.send("This user already exists");
//     //   }
//     // });
// });





module.exports = router;
