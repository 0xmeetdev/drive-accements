var passport = require('passport');
var express = require('express');
var GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/error' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:5173/dashboard');
  });

module.exports = router;