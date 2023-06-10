const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ message: "Welcome to the MERN project" });
});

module.exports = router;

// const router = require('express').Router();

// router.get('/', (req, res, next) => {
//   res.render('index');
// });

// module.exports = router;
