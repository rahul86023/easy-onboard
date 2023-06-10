const router = require("express").Router();
const User = require("../models/user.model");
router.get("/profile", async (req, res, next) => {
  console.log(req.body, "in a function");

  //const user = localStorage.getItem("user");
  //  const val = JSON.parse(user);
  const person = req.user;
  res.json({ person }); // Send JSON response
});

module.exports = router;

// const router = require('express').Router();

// router.get('/profile', async (req, res, next) => {
//   // console.log(req.user);
//   const person = req.user;
//   res.render('profile', { person });
// });

// module.exports = router;
