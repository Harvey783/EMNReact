const passport = require('passport');
const GStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return existingUser;
      } else {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile', profile);
        const user = await new User({ googleId: profile.id }).save();
        return user;
      }
    }
  )
);
