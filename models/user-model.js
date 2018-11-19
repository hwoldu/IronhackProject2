const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({

  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true ,
    match: /^.+@.+\..+$/, }, 
  encryptedPassword: { type: String, },
  role: { 
    type: String, 
    enum: [ "normal", "admin" ],
    required: true, 
    default: "normal",
    avatar: {
      type: String,
    },

  },

}, {
  timestamps: true 

}); 



// define the "isAdmin virtual property (its really like a method)
// CANNOT be an arrow functions it uses THIS 
// (we use this to get around the limits on if conditions in HBS files)
userSchema.virtual("isAdmin").get(function () { 
  return this.role === "admin";
});

const User = mongoose.model("User", userSchema);

module.exports = User; 