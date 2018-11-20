const passport = require("passport");
const User = require("../../models/user-model.js");


passport.serializeUser((userDoc, done) => {
console.log("serialize save the user ID to session");
 done(null, userDoc._id);
});

passport.deserializeUser((userId, done) => {
console.log("DeSeRiAliZe 🎭 (retrieving user info from the DB)");

  User.findById(userId)
  .then(userDoc => {
    done(null, userDoc);
  })

  .catch(err => done(err));
}); 

