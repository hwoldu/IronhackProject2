const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/user-model.js");
const router = express.Router();
const flash        = require('connect-flash');


// this const from the Express lesson. Uncomment if want to use 🦄:
// const { sendSignupMail } = require("../config/nodemailer-setup.js");

// to encrypt passwords
//const bcrptySalt = 10;

router.get("/meal-plan", (req, res, next) => {
  res.render("recipe-views/meal-plan.hbs");
});


router.post("/signup-process", (req, res, next) => {
  const { fullName, username, email, password } = req.body;
  if (!password || password.match(/[0-9]/) === null) {
    req.flash("error", "Password can't be blank and must contain a number");
    res.redirect("/login");
    return;
  }

  const encryptedPassword = bcrypt.hashSync(password, 10);

  User.create({ fullName, username, email, encryptedPassword })
    .then(userDoc => {
      req.flash("success", "Signup success 🤸🏾‍")
      res.redirect("/login");
    })
    .catch(err => next(err));
});


router.get("/signup", (req, res, next) => {
  res.render("auth-views/signup-form.hbs");
});

// 📨 CODE FOR EXPRESS USERS EMAIL OPTION. REPLACE ABOVE CODE IF YOU WANT TO USE   📪 
// User.create({fullName, username, email, encryptedPassword })
//     .then(userDoc => {
//       // EXPRESS USERS EMAIL OPTION 
//       sendSignupMail(userDoc) 
//       .then(() => { 
//       req.flash("success!, signup!);
//       res.redirect("/");
//     })
//     .catch(err => next(err));
//   })
//     .catch(err => next(err));
// });

router.post("/login-process", (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username: { $eq: username } })
    .then(userDoc => {

      if (!userDoc) {
        req.flash("error", "Incorrect Username. 🙅🏽‍");
        res.redirect("/login");
        return;
      }

      const { encryptedPassword } = userDoc;

      // check the password
      if (!bcrypt.compareSync(password, encryptedPassword)) {
        req.flash("error", "Incorrect password. 🤕");
        res.redirect("/login");
        return;
      }

      else {
        req.logIn(userDoc, () => {
          req.flash("success", "Log in success! 🤜✨🤛 ")
          res.render("recipe-views/recipe-form.hbs");
        });
      }
    })
    .catch(err => next(err));
});

router.get("/login", (req, res, next) => {
  res.render("auth-views/login-form.hbs");
});

router.get("/logout", (req, res, next) => {
  req.logout();
  req.flash("success", "Logged out successfully! 🏋🏻‍");
  res.redirect("/");
});


module.exports = router;