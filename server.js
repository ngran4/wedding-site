require('dotenv').config();
const express = require("express");
const session = require('express-session');
// const passport = require('./config/passport');
const connectDB = require('./config/database');

const app = express();

// Connect Database
connectDB();

app.use(session({
  secret: 'process.env.SESSION_SECRET',
  resave: false,
  saveUninitialized: false
}));

// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const userRoutes = require('./routes/users');
app.use('/', userRoutes);
// app.use('/users', require('./routes/users'));

app.get('/', (req, res) => res.send('Hello world!'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));