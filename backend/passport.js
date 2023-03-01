const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const AuthSchema = require('./models/User');
const bcrypt = require('bcrypt');

const GOOGLE_CLIENT_ID =
  '952009317866-t3u5kaauk1ilg20vcsr13uioqrgo68h6.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

// GITHUB_CLIENT_ID = 'your id';
// GITHUB_CLIENT_SECRET = 'your id';

FACEBOOK_APP_ID = 'your id';
FACEBOOK_APP_SECRET = 'your id';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/auth/google/callback',
      scope: ['profile', 'email', 'phone'],
    },
    function (accessToken, refreshToken, profile, done) {
      // done(null, profile);
      // const email = profile.emails[0].value; // lấy địa chỉ email
      // console.log(profile);
      // done(null, profile);
      AuthSchema.findOne({ email: profile.emails[0].value }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          user = new AuthSchema({
            username: profile.displayName,
            email: profile.emails[0].value,
            password: bcrypt.hashSync('123456', bcrypt.genSaltSync(10)),
            provider: profile.provider,
            phone: profile.phoneNumber || null,
            country: profile._json.locale || null,
            img: profile.photos[0].value,
          });
          user.save((err) => {
            if (err) console.log(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      });
    }
  )
);

// passport.use(
//   new GithubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID,
//       clientSecret: GITHUB_CLIENT_SECRET,
//       callbackURL: '/auth/github/callback',
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//     }
//   )
// );

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: '/auth/facebook/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
