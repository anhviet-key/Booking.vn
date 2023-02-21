const express = require('express');
const db = require('./db/index');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passportSetup = require('./passport');
const passport = require('passport');
const AuthRoute = require('./routes/auth');
const HotelRoute = require('./routes/hotels');
const RoomRoute = require('./routes/rooms');
const UserRoute = require('./routes/users');
const session = require('express-session');
const app = express();
const port = 8800;

app.use(express.json());
app.use(cookieParser());
app.use(
  cookieSession({
    name: 'session',
    keys: ['anhvietkey'],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: 'http://localhost:3008',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);
app.use(
  session({
    secret: 'somethingsecretgoeshere',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
db.connect();
dotenv.config();

app.use('/api/auth', AuthRoute);
app.use('/api/hotels', HotelRoute);
app.use('/api/rooms', RoomRoute);
app.use('/api/users', UserRoute);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || 'Something went wrong!';

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

app.listen(port, () => {});
