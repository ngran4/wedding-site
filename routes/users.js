const express = require('express');
const passport = require('passport');
const { ensureAuthenticated } = require('../middleware/auth');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('login'); // render login view
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/users/login',
  failureFlash: true
}))

router.get('logout', (req, res) => {
  req.logout();
  res.redirect('/login');
})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard');
})

// router.get('/dashboard', ensureAuthenticated, (req, res) => {
//   res.render('dashboard', { user: req.user });
// })

module.exports = router;