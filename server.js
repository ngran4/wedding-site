require('dotenv').config();
const express = require("express");
const session = require('express-session');
const connectDB = require('./config/database');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Connect Database
connectDB();

app.use(session({
  secret: 'process.env.REACT_APP_SESSION_SECRET',
  resave: false,
  saveUninitialized: false
}));


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// const userRoutes = require('./routes/users');
const guestsRouter = require('./routes/api/guests');

app.use('/api/guests', guestsRouter);
// app.use('/api/users', userRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const passport = require('./config/passport');
// app.use(passport.initialize());
// app.use(passport.session());