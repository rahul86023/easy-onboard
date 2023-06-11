const express = require("express");
const createHttpError = require("http-errors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const session = require("express-session");
const connectFlash = require("connect-flash");
const cors = require("cors");
const passport = require("./utils/passport-jwt-strategy"); // Updated import

const User = require("./models/user.model");

const { ensureLoggedIn } = require("connect-ensure-login");
const { roles } = require("./utils/constants");

// Initialization
const app = express();
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Session
const MongoStore = require("connect-mongo")(session);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport Middleware
app.use(passport.initialize());
//app.use(passport.session());

// Connect Flash
app.use(connectFlash());
// app.use((req, res, next) => {
//   res.locals.messages = req.flash();
//   next();
// });

// Routes
app.use("/", require("./routes/index.route"));
app.use("/auth", require("./routes/auth.route"));
app.use("/user", require("./routes/user.route"));
app.use("/admin", require("./routes/admin.route"));

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

module.exports = app;
