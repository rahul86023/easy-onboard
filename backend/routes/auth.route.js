// const express = require("express");
// const router = express.Router();
// const createHttpError = require("http-errors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const passport = require("passport");
// const User = require("../models/user.model");
// const jwtSecret = process.env.JWT_SECRET; // Update with your JWT secret

// // Registration route
// router.post("/register", async (req, res, next) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       throw createHttpError.Conflict("User already exists");
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create new user
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     // Save user to the database
//     await newUser.save();

//     res.sendStatus(201);
//   } catch (error) {
//     next(error);
//   }
// });

// // Login route
// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", { session: false }, (err, user, info) => {
//     if (err) {
//       return next(err);
//     }

//     if (!user) {
//       return next(createHttpError.Unauthorized(info.message));
//     }

//     req.login(user, { session: false }, async (err) => {
//       if (err) {
//         return next(err);
//       }

//       // Generate JWT token
//       const token = jwt.sign({ sub: user._id }, jwtSecret, {
//         expiresIn: "1h", // Token expiration time
//       });

//       res.json({ token });
//     });
//   })(req, res, next);
// });

// module.exports = router;

const router = require("express").Router();
const User = require("../models/user.model");
const { body, validationResult } = require("express-validator");
const passport = require("passport");
const { ensureLoggedOut, ensureLoggedIn } = require("connect-ensure-login");
const { registerValidator } = require("../utils/validators");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user, "line 79");
    // if (!user || user.password !== req.body.password) {
    //   return res.status(422).json({
    //     message: "Invalid username or password",
    //   });
    // }

    return res.status(200).json({
      message: "Sign in successful, here is your token, please keep it safe!",
      data: {
        token: jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
          expiresIn: "36000",
        }),
        user: user,
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

// router.post(
//   "/login",
//   ensureLoggedOut({ redirectTo: "/" }),
//   (req, res, next) => {
//     console.log(req, "req printing");

//     res.json({ message: "Login" });
//   }
// );

// router.post(
//   "/login",
//   ensureLoggedOut({ redirectTo: "/" }),
//   passport.authenticate("jwt", {
//     successReturnToOrRedirect: "/",
//     failureRedirect: "/auth/login",
//     failureFlash: true,
//   }),
//   (req, res) => {
//     res.json({ message: "Login successful" });
//   }
// );

router.get(
  "/register",
  ensureLoggedOut({ redirectTo: "/" }),
  (req, res, next) => {
    res.json({ message: "Register" });
  }
);

router.post(
  "/register",
  ensureLoggedOut({ redirectTo: "/" }),
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

router.get("/logout", ensureLoggedIn({ redirectTo: "/" }), (req, res) => {
  req.logout();
  res.json({ message: "Logout" });
});

module.exports = router;
