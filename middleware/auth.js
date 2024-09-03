module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if(req.isAuthenticated()) {
      return next();
    }
    res.redirct('/login');
  }
}