const express = require("express");
const createHttpError = require("http-errors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const session = require("express-session");
const connectFlash = require("connect-flash");
const cors = require("cors");
const passportJWT = require("./utils/passport.auth");
const passport = require("passport");
// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("./models/user.model");
// const jwtSecret = process.env.JWT_SECRET; // Update with your JWT secret

const { ensureLoggedIn } = require("connect-ensure-login");
const { roles } = require("./utils/constants");

// Initialization
const app = express();
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// // Passport JWT Strategy
// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: jwtSecret,
// };

// passport.use(
//   new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
//     try {
//       const user = await User.findById(jwtPayload.sub);
//       if (!user) {
//         return done(null, false);
//       }
//       return done(null, user);
//     } catch (error) {
//       done(error);
//     }
//   })
// );

// Session
const MongoStore = require("connect-mongo")(session);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      // secure: true,
      httpOnly: true,
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
// const setUserLocals = (req, res, next) => {
//   if (req.user) {
//     res.locals.user = req.user;
//   }
//   next();
// };

// Passport Middleware
app.use(passport.initialize());

app.use(passport.session());
// app.use(passport.authenticate("jwt", { session: false }));

//app.use(passport.setAuthenticatedUser);
//app.use(setUserLocals);

// Connect Flash
app.use(connectFlash());
app.use((req, res, next) => {
  console.log(req, "req in app.js");
  res.locals.messages = req.flash();
  next();
});

// Routes
app.use("/", require("./routes/index.route"));
app.use("/auth", require("./routes/auth.route"));
app.use("/user", require("./routes/user.route")); // Apply authentication only to specific routes
app.use("/admin", require("./routes/admin.route")); // Apply authentication and authorization middleware

// 404 Handler
app.use((req, res, next) => {
  next(createHttpError.NotFound());
});

// Error Handler
app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status);
  res.json({ error: error.message });
});

// Setting the PORT
const PORT = process.env.PORT || 3000;

// Making a connection to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("💾 connected...");
    // Listening for connections on the defined PORT
    app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
  })
  .catch((err) => console.log(err.message));

function ensureAdmin(req, res, next) {
  if (req.user && req.user.role === roles.admin) {
    next();
  } else {
    res.status(403).json({ error: "You are not authorized to see this route" });
  }
}

// const express = require("express");
// const createHttpError = require("http-errors");
// const morgan = require("morgan");
// const mongoose = require("mongoose");
// require("dotenv").config();
// const session = require("express-session");
// const connectFlash = require("connect-flash");
// const cors = require("cors");

// const passport = require("passport");
// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const User = require("./models/user.model");
// const jwtSecret = "my_secret"; // Replace with your own secret

// const { ensureLoggedIn } = require("connect-ensure-login");
// const { roles } = require("./utils/constants");

// // Initialization
// const app = express();
// app.use(morgan("dev"));
// app.use(express.static("public"));
// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({ extended: false }));

// // Passport JWT Strategy
// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: jwtSecret,
// };

// passport.use(
//   new JwtStrategy(jwtOptions, async (jwtPayload, done) => {
//     try {
//       const user = await User.findById(jwtPayload.sub);
//       if (!user) {
//         return done(null, false);
//       }
//       return done(null, user);
//     } catch (error) {
//       done(error);
//     }
//   })
// );

// // Session
// const MongoStore = require("connect-mongo")(session);
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       // secure: true,
//       httpOnly: true,
//     },
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// );
// const setUserLocals = (req, res, next) => {
//   if (req.user) {
//     res.locals.user = req.user;
//   }
//   next();
// };

// // Passport Middleware
// app.use(passport.initialize());
// //app.use(passport.session());
// //app.use(passport.authenticate("jwt", { session: false }));
// app.use(setUserLocals);

// // Connect Flash
// app.use(connectFlash());
// app.use((req, res, next) => {
//   console.log(req, "req in app.js");
//   res.locals.messages = req.flash();
//   next();
// });

// // Routes
// app.use("/", require("./routes/index.route"));
// app.use("/auth", require("./routes/auth.route"));
// app.use("/user", require("./routes/user.route")); // Apply authentication only to specific routes
// app.use("/admin", require("./routes/admin.route")); // Apply authentication and authorization middleware

// // 404 Handler
// app.use((req, res, next) => {
//   next(createHttpError.NotFound());
// });

// // Error Handler
// app.use((error, req, res, next) => {
//   error.status = error.status || 500;
//   res.status(error.status);
//   res.json({ error: error.message });
// });

// // Setting the PORT
// const PORT = process.env.PORT || 3000;

// // Making a connection to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI, {
//     dbName: process.env.DB_NAME,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     console.log("💾 connected...");
//     // Listening for connections on the defined PORT
//     app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
//   })
//   .catch((err) => console.log(err.message));

// function ensureAdmin(req, res, next) {
//   if (req.user && req.user.role === roles.admin) {
//     next();
//   } else {
//     res.status(403).json({ error: "You are not authorized to see this route" });
//   }
// }
