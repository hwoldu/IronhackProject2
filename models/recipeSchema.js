const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String },
  level: {
    type: String,
    enum: ["easy", "medium", "difficult"],
    required: true
  },
  ingredients: { type: Array },
  description: { type: Array },
  image: { type: String },
  duration: {
    type: Number,
    max: 1000,
    min: 0
  },
  season: {
    type: String,
    enum: ["winter", "summer", "spring", "autumn"],
    required: true
  },
  link: { type: String },
  verified: {
    type: Boolean,
    default: false,
    required: true,
  },
  owner: {
    type: String,
  }
});

const recipe = mongoose.model("recipe", recipeSchema);
module.exports = recipe;
