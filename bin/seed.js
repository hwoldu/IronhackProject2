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


  const Produce = [
{ name: "Beetroot",
  image: "./public/images/winter/beet.jpeg",
  season: "winter",
  },
{
  name: "Broccoli",
  image: "./public/images/winter/broccoli.jpeg",
  season: "winter",
},
{
  name: "Brussel sprout",
  image: "./public/images/winter/brusselsprout.jpeg",
  season: "winter",
},
{
  name: "Carrot",
  image: "./public/images/winter/carrot.jpeg",
  season: "winter",
},
{
  name: "Collard Green",
  image: "./public/images/winter/collardgreen.jpeg",
  season: "winter",
},
{
  name: "Grapefruit",
  image: "./public/images/winter/grapefruit.jpeg",
  season: "winter",
},
{
  name: "Kale",
  image: "./public/images/winter/kale.jpeg",
  season: "winter",
},
{
  name: "Kiwi",
  image: "./public/images/winter/kiwi.jpeg",
  season: "winter",
},
{
  name: "Lemon",
  image: "./public/images/winter/lemon.jpeg",
  season: "winter",
},
{
  name: "Onions",
  image: "./public/images/winter/onion.jpeg",
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
{
  name: "Apples",
  image: "./public/images/autumn/apples.jpeg"
  season: "Autumn",
},
{
  name: "Apples",
  image: "./public/images/autumn/apples.jpeg"
  season: "Autumn",
},
{
  name: "Butternut",
  image: "./public/images/autumn/butternut.jpeg"
  season: "Autumn",
},
{
  name: "Cabbage",
  image: "./public/images/autumn/cabbage.jpeg"
  season: "Autumn",
},
{
  name: "Cauliflower",
  image: "./public/images/autumn/cauliflower.jpeg"
  season: "Autumn",
},
{
  name: "Chestnut",
  image: "./public/images/autumn/chestnut.jpeg"
  season: "Autumn",
},
{
  name: "Grapes",
  image: "./public/images/autumn/grapes.jpeg"
  season: "Autumn",
},
{
  name: "Leeks",
  image: "./public/images/autumn/leeks.jpeg"
  season: "Autumn",
},
{
  name: "Parships",
  image: "./public/images/autumn/parships.jpeg"
  season: "Autumn",
},
{
  name: "Pears",
  image: "./public/images/autumn/pears.jpeg"
  season: "Autumn",
},
{
  name: "Pumpkins",
  image: "./public/images/autumn/pumpkins.jpeg"
  season: "Autumn",
},
{
  name: "Quince",
  image: "./public/images/autumn/quince.jpeg"
  season: "Autumn",
},
{
  name: "Walnuts",
  image: "./public/images/autumn/walnuts.jpeg"
  season: "Autumn",
},
