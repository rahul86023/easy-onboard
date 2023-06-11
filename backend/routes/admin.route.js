const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const { roles } = require("../utils/constants");
const passport = require("passport");

router.get(
  "/HRs",
  passport.authenticate("jwt", { session: false }),

  async (req, res, next) => {
    try {
      const users = await User.find({});

      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);
router.get(
  "/employees",
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
