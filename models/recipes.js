const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema ({

title: { type: String, required: true },
image: { type: String },
level: { type: String },
duration: { 
  type: time,  
  min: 0, },
ingredients: { array },

});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;