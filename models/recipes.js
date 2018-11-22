const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({

  title: { type: String, required: true },
  image: { type: String },
  level: { 
    type: String,
    enum: ["easy", "medium", "difficult"],
    required:true,
   },
  duration: {
    type: Number,
    min: 0,
  },
  ingredients: {type: [String]},
  description: {type: String},
  verified: {
    type: Boolean,
    default: false,
    required: true,
  }
});

const recipe = mongoose.model("Recipe", recipeSchema);
module.exports = recipe;