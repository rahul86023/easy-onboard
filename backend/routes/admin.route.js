const User = require("../models/user.model");
const router = require("express").Router();
const mongoose = require("mongoose");
const passport = require("passport");
const { roles } = require("../utils/constants");

// Middleware to protect routes
const authenticate = passport.authenticate("jwt", { session: false });

router.get("/users", async (req, res, next) => {
  try {
    // if (!req.user) {
    //   return res.status(401).json({ error: "Unauthorized" });
    // }

    const users = await User.find({
      addedBy: req.user._id,
      role: roles.employee,
    });

    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/user/:id", authenticate, async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    const person = await User.findById(id);

    res.json(person);
  } catch (error) {
    next(error);
  }
});

router.post("/update-role", authenticate, async (req, res, next) => {
  try {
    const { id, role } = req.body;

    // Checking for id and roles in req.body
    if (!id || !role) {
      return res.status(400).json({ error: "Invalid request" });
    }

    // Check for valid mongoose objectID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    // Check for Valid role
    const rolesArray = Object.values(roles);
    if (!rolesArray.includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    // Admin cannot remove himself/herself as an admin
    if (req.user.id === id && role === roles.ADMIN) {
      return res.status(403).json({
        error: "Admins cannot remove themselves from Admin, ask another admin.",
      });
    }

    // Finally update the user
    const user = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true, runValidators: true }
    );

    res.json({
      message: `Updated role for ${user.email} to ${user.role}`,
      user,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

// const User = require('../models/user.model');
// const router = require('express').Router();
// const mongoose = require('mongoose');
// const { roles } = require('../utils/constants');

// router.get('/users', async (req, res, next) => {
//   try {
//     const users = await User.find();
//     // res.send(users);
//     res.render('manage-users', { users });
//   } catch (error) {
//     next(error);
//   }
// });

// router.get('/user/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       req.flash('error', 'Invalid id');
//       res.redirect('/admin/users');
//       return;
//     }
//     const person = await User.findById(id);
//     res.render('profile', { person });
//   } catch (error) {
//     next(error);
//   }
// });

// router.post('/update-role', async (req, res, next) => {
//   try {
//     const { id, role } = req.body;

//     // Checking for id and roles in req.body
//     if (!id || !role) {
//       req.flash('error', 'Invalid request');
//       return res.redirect('back');
//     }

//     // Check for valid mongoose objectID
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       req.flash('error', 'Invalid id');
//       return res.redirect('back');
//     }

//     // Check for Valid role
//     const rolesArray = Object.values(roles);
//     if (!rolesArray.includes(role)) {
//       req.flash('error', 'Invalid role');
//       return res.redirect('back');
//     }

//     // Admin cannot remove himself/herself as an admin
//     if (req.user.id === id) {
//       req.flash(
//         'error',
//         'Admins cannot remove themselves from Admin, ask another admin.'
//       );
//       return res.redirect('back');
//     }

//     // Finally update the user
//     const user = await User.findByIdAndUpdate(
//       id,
//       { role },
//       { new: true, runValidators: true }
//     );

//     req.flash('info', `updated role for ${user.email} to ${user.role}`);
//     res.redirect('back');
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;
