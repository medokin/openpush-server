var passport = require('passport')
  , GoogleStrategy = require('passport-google').Strategy
  , User = require('./../models/user');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  User.findById(user._id, function(err, user) {
    console.log(err, user);
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:3000/auth/google/return',
    realm: 'http://localhost:3000'
  },
  function(identifier, profile, done) {
    var user = {
      provider: 'google',
      providerId: identifier,
      displayName: profile.displayName,
      email: profile.emails[0].value
    }

    User.findOrCreate(user, function(err, result){
      //console.log(err, result);
      done(err, result);
    });
  }
));


