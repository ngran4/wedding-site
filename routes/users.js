const express = require('express');
const passport = require('passport');
const { ensureAuthenticated } = require('../middleware/auth');
const usersCtrl = require('../controllers/users.js');
const router = express.Router();

// Route to initiate Google OAuth login
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'] // Request profile and email from Google
}));

// Callback route that Google redirects to after login
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect to the dashboard or wherever you want
    res.redirect('/dashboard');
  }
);


// Registration 
router.get('/register', usersCtrl.renderRegister);
router.post('/register', usersCtrl.registerUser);

// Login
router.get('/login', usersCtrl.renderLogin);
router.post('/login', usersCtrl.loginUser);

// Logout
router.get('/logout', usersCtrl.logoutUser);

// Dashboard
router.get('/dashboard', ensureAuthenticated, usersCtrl.renderDashboard);


module.exports = router;