const mongoose = require("mongoose");
const Produce = require("../models/produce-list.js");

mongoose
  .connect('mongodb://localhost/project-two', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


  const winterProduce = [
{ name: "Beetroot",
  image: "./public/images/winter/beet.jpeg",
  season: "winter",
  },
{
  name: "Broccoli",
  image: "./public/images/winter/broccoli.jpeg"
  season: "winter",
},
{
  name: "Brussel sprout",
  image: "./public/images/winter/brusselsprout.jpeg"
  season: "winter",
},
{
  name: "Carrot",
  image: "./public/images/winter/carrot.jpeg"
  season: "winter",
},
{
  name: "Collard Green",
  image: "./public/images/winter/collardgreen.jpeg"
  season: "winter",
},
{
  name: "Grapefruit",
  image: "./public/images/winter/grapefruit.jpeg"
  season: "winter",
},
{
  name: "Kale",
  image: "./public/images/winter/kale.jpeg"
  season: "winter",
},
{
  name: "Kiwi",
  image: "./public/images/winter/kiwi.jpeg"
  season: "winter",
},
{
  name: "Lemon",
  image: "./public/images/winter/lemon.jpeg"
  season: "winter",
},
{
  name: "Onions",
  image: "./public/images/winter/onion.jpeg"
  season: "winter",
},
{
  name: "Persimmom",
  image: "./public/images/winter/persimmom.jpeg"
  season: "winter",
},
{
  name: "Pumpkin",
  image: "./public/images/winter/pumpkin.jpeg"
  season: "winter",
},
{
  name: "Squash",
  image: "./public/images/winter/squash.jpeg"
  season: "winter",
},
{
  name: "Sweet Potato",
  image: "./public/images/winter/sweetpotato.jpeg"
  season: "winter",
},
{
  name: "Tangerine",
  image: "./public/images/winter/tangerine.jpeg"
  season: "winter",
},
{
  name: "Turnips",
  image: "./public/images/winter/turnips.jpeg"
  season: "winter",
},

]
