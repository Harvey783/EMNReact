const passport = require('passport');
const GStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);
