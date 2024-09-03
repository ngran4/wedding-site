const express = require('express');
const passport = require('passport');
const { ensureAuthenticated } = require('../middleware/auth');
usersCtrl = require('../../controllers/users');
const router = express.Router();


// Registration 
router.get('/register', userstrl.renderRegister);
router.post('/register', userCtrl.registerUser);

// Login
router.get('/login', usersCtrl.renderLogin);
router.post('/login', usersCtrl.loginUser);

// Logout
router.get('/logout', usersCtrl.logoutUser);

// Dashboard
router.get('/dashboard', ensureAuthenticated, userController.renderDashboard);


module.exports = router;