const { render } = require('@testing-library/react');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const passport = require('passport');


const registerUser = async(req, res) => {
  const {username, email, password, password2} = req.body;
  let errors = [];

  // check required fields
  if (!username || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields'});
  }

  // check password length 
  if (password.length < 6) {
    errors.push({ msg: 'Password should be at least 6 characters'});
  }

  // check passwords match
  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match'});
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      username,
      email,
      password,
      password2
    });
  } else {
    // validation passed
    try {
      const user = await User.findOne({ email });
      if (user) {
        // sser exists
        errors.push({ msg: 'Email is already registered' });
        res.render('register', {
          errors,
          username,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          username,
          email,
          password
        });

        // save user
        await newUser.save();
        req.flash('success_msg', 'You are now registered and can log in');
        res.redirect('/login');
      }
    } catch (err) {
      console.error(err);
      res.render('register', {
        errors: [{ msg: 'An error occurred during registration' }],
        username,
        email,
        password,
        password2
      });
    }
  }
};

const loginUser = (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
}

const logoutUser = (req, res) => {
  req.logout();
  res.redirect('/login');
}

const renderRegister = (req, res) => {
  res.render('register');
}

const renderLogin = (req, res) => {
  res.render('login');
}

renderDashboard = (req, res) => {
  res.render('dashboard');
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  renderRegister,
  renderLogin,
  renderDashboard
};