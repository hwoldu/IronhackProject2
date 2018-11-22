const express = require('express');
const User = require("../models/user-model.js");
const router  = express.Router();
const fileUploader = require("../config/file-upload.js");


/* GET home page */
router.get('/', (req, res, next) => {
  if (req.user) {
    console.log("Logged in! 🥙", req.user);
  }
  else {
    console.log("Not logged in! 🍎", req.user);
  }
  res.locals.currentUser = req.user;
  res.render('index');
});

router.get("/settings", (req, res, next) => {
  if (!req.user) {
    // req.flash("error", "You have to be logged-in to visit User Settings!");
    res.redirect("/login");
  }
  else {
    res.render("settings-page.hbs");
  }
});

router.post("/process-settings", (req, res, next) => {
  const {fullName, email} = req.body;
  // fileUploader.single("avatarUpload"), 
  let toUpdate = {fullName, email};

  // if (req.file){
  //   toUpdate = {fullName, email, avatar: req.file.secure_url};
  // }
  
  User.findByIdAndUpdate(
    req.user._id,
    { $set: toUpdate  },
    { runValidators: true },
  )
    .then(userDoc => {
      // req.flash("success", "Setting saved! 🏆");
      res.redirect("/");
    })
    .catch(err => next(err));
});



module.exports = router;










