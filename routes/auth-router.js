const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/user-model.js");
const router = express.Router();


router.get("/signup", (req, res, next) => {
  res.render("auth-views/signup-form.hbs");
});

router.post("/process-signup", (req, res, next) => {
  const { fullName, email, originalPassword } = req.body;
  if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
    // req.flash("error", "Password can't be blank and must contain a number");
    res.redirect("/signup");
    return;
  }
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  User.create({fullName, username, email, encryptedPassword })
    .then(userDoc => {
      // req.flash("success", "Signup success 🤸🏾‍")
      res.redirect("/");

    })
    .catch(err => next(err));
});

router.get("/login", (req, res, next) => {
  res.render("auth-views/login-form.hbs");
});

router.post("/process-login", (req, res, next) => {
  const { username, originalPassword } = req.body;

  User.findOne({ username: { $eq: username }})
    .then(userDoc => {

      if (!userDoc) {
        // req.flash("error", "Incorrect Username. 🙅🏽‍");
        res.redirect("/login");
        return; 
      }

      // check the password
      const { encryptedPassword } = userDoc;
      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
        // req.flash("error", "Incorrect password. 🤕");
        res.redirect("/login");
      }
      else {
        req.logIn(userDoc, () => {
          // req.flash("success", "Log in success! 🤜✨🤛 ")
          res.redirect("/");

        });
      }
    })
    .catch(err => next(err));
});


router.get("/logout", (req, res, next) => {
  req.logout();
  // req.flash("success", "Logged out successfully! 🏋🏻‍");
  res.redirect("/");
});



module.exports = router;