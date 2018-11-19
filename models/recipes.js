const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({

  title: { type: String, required: true },
  image: { type: String },
  level: { type: String },
  duration: {
    type: Number,
    min: 0,
  },
  ingredients: {type: Array}, 

});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;