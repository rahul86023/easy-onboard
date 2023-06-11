// users.js

const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { registerValidator } = require("../utils/validators");
const { validationResult } = require("express-validator");
// const { jwtSecret, jwtExpiresIn } = require("../config");

// User model import
const User = require("../models/user.model");

// @route   POST /users/login
// @desc    Authenticate user and generate JWT token
// @access  Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Validate the password
    const isMatch = await user.isValidPassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // // Generate JWT token current working code
    const token = jwt.sign({ sub: user._id }, "my_secret", {
      expiresIn: "1d",
    });
    // Generate JWT token with user
    // const token = jwt.sign(user.toJSON(), "my_secret", {
    //   expiresIn: "1d",
    // });

    // Return the token to the client
    res.status(200).json({
      message: "Sign in successful,here is your token please keep it safe",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
router.post(
  "/register",
  // ensureLoggedOut({ redirectTo: "/" }),
  registerValidator,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        return res.status(400).json({ errors: errorMessages });
      }

      const { email } = req.body;
      const doesExist = await User.findOne({ email });
      if (doesExist) {
        return res.status(400).json({ error: "Username/email already exists" });
      }

      const user = new User(req.body);
      await user.save();
      return res.json({
        message: `${user.email} registered successfully, you can now login`,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

// const router = require("express").Router();
// const User = require("../models/user.model");
// const { validationResult } = require("express-validator");
// const passport = require("passport");
// const jwt = require("jsonwebtoken");

// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", { session: false }, (err, user, info) => {
//     if (err) {
//       return next(err);
//     }
//     // if (!user) {
//     //   return res.status(422).json({ message: "Invalid username or password" });
//     // }
//     const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
//       expiresIn: "36000",
//     });
//     return res.json({
//       message: "Sign in successful, here is your token, please keep it safe!",
//       data: {
//         token: token,
//         user: user,
//       },
//     });
//   })(req, res, next);
// });

// // Other routes...
// module.exports = router;
