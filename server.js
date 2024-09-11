require('dotenv').config();
const express = require("express");
const session = require('express-session');
const passport = require('./config/passport');
require('./config/database');

const app = express();

app.use(session({
  secret: 'process.env.SESSION_SECRET',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userRoutes = require('./routes/users');
app.use('/', userRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));