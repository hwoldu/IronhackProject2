const express = require("express");
const router = express.Router();
const recipeList = require("../models/recipeSchema.js");


// show all recipes
router.get('/recipe-list', (req, res, next) => {
  recipeList.find( { season: {$eq: res.locals.season} } )
    .then(arrayDocs => {
      res.locals.recipeSchema = arrayDocs;
      res.render("recipe-views/recipe-list.hbs");
    })
    .catch(err => next(err));
});


// add recipes
router.get("/recipe/add", (req, res, next) => {
  if (!req.user) {
    req.flash("error", "You have to be logged-in to add a recipe. 🥨");
    res.redirect("/login");
    return;
  }
  else {
    res.render("recipe-views/recipe-form.hbs");
  }
});

router.post("/recipe/process-recipe", (req, res, next) => {
  const { title, level, ingredients, dishType, description, image, duration, season  } 
  = req.body;
  const owner = req.user._id;
  recipeList.create( { title, level, ingredients, dishType, description, image, duration, season, owner } )
    .then( recipeDoc => {
      req.flash("success", "Recipe created successfully 🍪 ");
      res.redirect("/recipe/my-recipes");
    })
    .catch(err => next(err));
});


// show user's recipe
router.get("/recipe/my-recipes", (req, res, next) => {
  if (!req.user) {
    req.flash("error", "You have to be logged-in to see your recipes.");
    res.redirect("/login");
    return;
  }
  else {
    recipeList.find( { owner: {$eq: req.user._id} } )
    .then(arrayDocs => {
      res.locals.recipeUser = arrayDocs;
      res.render("recipe-views/my-recipes.hbs");
    })
    .catch(err => next(err));
    
  }
});


// show recipe details
router.get("/recipe-one/:recipeId", (req, res, next) => {
  const { recipeId } = req.params;
  console.log(recipeId);
  recipeList.findById(recipeId)
      .then(recipeDoc => {
        res.locals.recipeItem = recipeDoc;
        res.render("recipe-views/recipe-one.hbs");
      })
      .catch(err => next(err));
});


module.exports = router;