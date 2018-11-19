const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipes.js");


router.get("/recipe/add", (req, res, next) => {
  if (!req.user) {
    // req.flash("error", "You have to be logged-in to add a recipe. 🥨");
    res.redirect("/login");
    return;
  }
  else {
    res.render("recipe-views/recipe-list.hbs");
  }
  res.render("recipe-views/recipe-form.hbs");
});

router.post("/process-recipe", (req, res, next) => {
  const { title, level, ingredients, dishType, description, image, duration, season  } 
  = req.body;
  const owner = req.user._id;
  Recipe.create( { title, level, ingredients, dishType, description, image, duration, season } )
    .then( recipeDoc => {
      // req.flash("success", "Recipe created successfully 🛋 ");
      res.redirect("/my-recipes");
    })
    .catch(err => next(err));
});

router.get("/recipe-list", (req, res, next) => {
  res.render("recipe-views/recipe-list.hbs");
});

module.exports = router;