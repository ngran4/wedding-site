const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

// Configure Local Strategy (for username/password)
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: 'Invalid username' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

// Configure Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID, // Set in your .env file
    clientSecret: process.env.GOOGLE_SECRET, // Set in your .env file
    callbackURL: process.env.GOOGLE_CALLBACK // Set to handle callback after login
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if the user already exists in the database
      let user = await User.findOne({ googleId: profile.id });

      if (user) {
        return done(null, user);
      } 

      // If the user is new, create a new entry in the database
      user = await User.create({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value // Assuming Google provides a photo
      });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user.id); // This will store the user’s ID in the session
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;