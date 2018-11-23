const express = require("express");
const router = express.Router();

const Recipe = require("../models/recipeSchema.js");

router.get("/admin/recipes", (req, res, next) => {
  if (!req.user || req.user.role !== "admin"){
    // req.flash("error", "Only admins can do that. 🏄🏻‍");
    res.redirect("/");
    return;
  }
  Recipe.find({verified: {$eq: false}})
    .then(recipeResults => {
      res.locals.recipeArray = recipeResults;
      res.locals.recipeVerifNumber = recipeResults.length;
      res.render("admin-views/admin-page.hbs");
    })
    .catch(err => next(err));
});


module.exports = router;