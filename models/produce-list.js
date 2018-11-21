const mongoose = require("mongoose");
const Schema = mongoose.Schema; 


const produceSchema = Schema({
  name: { type: String },
  image: { type: String },
  season: { type: String,  
  enum: ["winter", "summer", "spring", "autumn"],
  required: true,}
});


const Produce = mongoose.model("produce", produceSchema);
module.exports = Produce;