const express = require('express');
const User = require("../models/user-model.js");
const router  = express.Router();
const fileUploader = require("../config/file-upload.js");
const Produces = require("../models/produceSchema.js");


/* GET home page */
router.get('/', (req, res, next) => {
  Produces.find( { season: {$eq: res.locals.season} } )
    .then(arrayDoc => {
      res.locals.produces = arrayDoc;
      res.render("index.hbs");
    })
    .catch(err => next(err));
});

router.get("/settings", (req, res, next) => {
  if (!req.user) {
    req.flash("error", "You have to be logged-in to visit User Settings!");
    res.redirect("/login");
  }
  else {
    res.render("settings-page.hbs");
  }
});

router.post("/process-settings", (req, res, next) => {
  const {fullName, email} = req.body;
  let toUpdate = {fullName, email};

  if (req.file){
    toUpdate = {fullName, email};
  }
  
  User.findByIdAndUpdate(
    req.user._id,
    { $set: toUpdate  },
    { runValidators: true },
  )
    .then(userDoc => {
      req.flash("success", "Setting saved! 🏆");
      res.redirect("/");
    })
    .catch(err => next(err));
});





module.exports = router;










