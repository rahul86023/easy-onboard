const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { roles } = require("../utils/constants");
const passport = require("passport");

router.get(
  "/users",
  passport.authenticate("jwt", { session: false }),

  async (req, res, next) => {
    try {
      const userId = req.user._id;
      const users = await User.find({
        addedBy: userId,
        role: roles.employee,
      });

      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
