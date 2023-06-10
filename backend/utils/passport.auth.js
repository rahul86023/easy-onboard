const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user.model");
const jwtSecret = process.env.JWT_SECRET; // Replace with your own secret
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

passport.use(
  new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      const user = await User.findById(jwtPayload.sub);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  })
);

module.exports = passport;

// const passport = require("passport");
// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const User = require("../models/user.model");
// const jwtSecret = "your_jwt_secret"; // Replace with your own secret

// // Define options for JWT strategy
// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: jwtSecret,
// };

// passport.use(
//   new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
//     try {
//       const user = await User.findById(jwtPayload.sub);
//       // User does not exist
//       if (!user) {
//         return done(null, false, { message: "User not found" });
//       }
//       // User found
//       return done(null, user);
//     } catch (error) {
//       done(error);
//     }
//   })
// );

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });
