const passport = require("passport");
const User = require("../../models/user-model.js");


//serializeUser(): defines what data to save in the session
passport.serializeUser((userDoc, done) => {
console.log("serialize save the user ID to session");
  // call done() with null and the result if its successful
  // (the result is the user's ID that we want to save in the session)
 done(null, userDoc._id);
});

// deserializeUser(): defines how to retrieve the user info from the DB
passport.deserializeUser((userId, done) => {
console.log("DeSeRiAliZe 🎭 (retrieving user info from the DB)");

  User.findById(userId)
  .then(userDoc => {
    // call done() with null and the result if its successful
    //( the result is the user doc from the DB)
    done(null, userDoc);
  })

  // call done() with the error object if it fails 
  .catch(err => done(err));
}); 

