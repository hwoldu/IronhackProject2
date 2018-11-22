const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/user-model.js");
const router = express.Router();
// this const from the Express lesson. Uncomment if want to use 🦄:
// const { sendSignupMail } = require("../config/nodemailer-setup.js");

// to encrypt passwords
const bcrptySalt = 10;

router.get("/meal-plan", (req, res, next) => {
  res.render("recipe-views/meal-plan.hbs");
});


router.get("/signup", (req, res, next) => {
  res.render("auth-views/signup-form.hbs");
});


router.post("/signup-process", (req, res, next) => {
  const { fullName, username, email, originalPassword } = req.body;
  if (!originalPassword || originalPassword.match(/[0-9]/) === null) {
    // req.flash("error", "Password can't be blank and must contain a number");
    res.redirect("auth-views/signup-form");
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



router.get("/login", (req, res, next) => {
  res.render("auth-views/login-form.hbs");
});

router.get("/add-recipe", (req, res, next) => {
  res.render("auth-views/recipe-form.hbs");
});


router.post("/login-process", (req, res, next) => {
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
          res.redirect("/add-recipe");

        });
      }
    })
    .catch(err => next(err));
});


router.post("/process-recipe", (req, res, next) => {
  const { title, image, level, duration, ingredients, description } = req.body;
  
  Recipe.create({ title, image, level, duration, ingredients, description  })
    .then(recipeDoc => {
      // req.flash("success", "Recipe created success 🤸🏾‍")
      res.redirect("/process-recipe");

    })
    .catch(err => next(err));
});



router.get("/logout", (req, res, next) => {
  req.logout();
  // req.flash("success", "Logged out successfully! 🏋🏻‍");
  res.redirect("/");
});


module.exports = router;