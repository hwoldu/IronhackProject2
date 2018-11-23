const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const produceSchema = new Schema({
  name: { type: String },
  image: { type: String },
  season: {
    type: String,
    enum: ["winter", "summer", "spring", "autumn"],
    required: true,
  },
    verified: {
    type: Boolean,
    default: false,
    required: true,
  }



});



const Produce = mongoose.model("Produce", produceSchema);
module.exports = Produce;