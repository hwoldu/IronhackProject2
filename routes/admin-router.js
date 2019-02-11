const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipeSchema.js");



router.get("/admin", (req, res, next) => {
  if (!req.user || req.user.role !== "admin"){
    req.flash("error", "Only admins can do that. 🏄🏻‍");
    res.redirect("/");
    return;
  }


  Recipe.find({verified: {$eq: false}})
  .then(recipeResults => {
    res.locals.recipeArray = recipeResults;
    res.locals.recipeVerifNumber = recipeResults.length;
   //res.send(recipeResults[0].verified)
    res.render("admin-views/admin-page.hbs");
  })
  .catch(err => next(err));
});


router.get("/admin/:recipesId/recipes", (req, res, next) => {
  if (!req.user || req.user.role !== "admin"){
    req.flash("error", "Only admins can do that. 🏄🏻‍");
    res.redirect("/");
    return;
  }
const {recipesId} = req.params;

  Recipe.findByIdAndUpdate(
    recipesId,
    {$set:{verified: true}},
    { runValidators: true })
    .then(recipeResults => {
      console.log(recipeResults);
      res.locals.recipeArray = recipeResults;
      res.locals.recipeVerifNumber = recipeResults.length;
      res.redirect("/admin");
    })
    .catch(err => next(err));
    
    
});


module.exports = router;


