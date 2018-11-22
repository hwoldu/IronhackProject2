const mongoose = require("mongoose");
const Produce = require("../models/produce-list.js");

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


  const produce = [
{ name: "Beetroot",
  image: "./public/images/winter/beet.jpeg",
  season: "winter"
  },
{
  name: "Broccoli",
  image: "./public/images/winter/broccoli.jpeg",
  season: "winter"
},
{
  name: "Brussel sprout",
  image: "./public/images/winter/brusselsprout.jpeg",
  season: "winter"
},
{
  name: "Carrot",
  image: "./public/images/winter/carrot.jpeg",
  season: "winter"
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
  image: "./public/images/winter/persimmom.jpeg",
  season: "winter"
},
{
  name: "Pumpkin",
  image: "./public/images/winter/pumpkin.jpeg",
  season: "winter"

},
{
  name: "Squash",
  image: "./public/images/winter/squash.jpeg",
  season: "winter"
},
{
  name: "Sweet Potato",
  image: "./public/images/winter/sweetpotato.jpeg",
  season: "winter",
},
{
  name: "Tangerine",
  image: "./public/images/winter/tangerine.jpeg",
  season: "winter",
},
{
  name: "Turnips",
  image: "./public/images/winter/turnips.jpeg",
  season: "winter",
},
{
  name: "Apples",
  image: "./public/images/autumn/apples.jpeg",
  season: "autumn",
},
{
  name: "Apples",
  image: "./public/images/autumn/apples.jpeg",
  season: "autumn",
},
{
  name: "Butternut",
  image: "./public/images/autumn/butternut.jpeg",
  season: "autumn",
},
{
  name: "Cabbage",
  image: "./public/images/autumn/cabbage.jpeg",
  season: "autumn",
},
{
  name: "Cauliflower",
  image: "./public/images/autumn/cauliflower.jpeg",
  season: "autumn",
},
{
  name: "Chestnut",
  image: "./public/images/autumn/chestnut.jpeg",
  season: "autumn",
},
{
  name: "Grapes",
  image: "./public/images/autumn/grapes.jpeg",
  season: "autumn",
},
{
  name: "Leeks",
  image: "./public/images/autumn/leeks.jpeg",
  season: "autumn",
},
{
  name: "Parships",
  image: "./public/images/autumn/parships.jpeg",
  season: "autumn",
},
{
  name: "Pears",
  image: "./public/images/autumn/pears.jpeg",
  season: "autumn",
},
{
  name: "Pumpkins",
  image: "./public/images/autumn/pumpkins.jpeg",
  season: "autumn",
},
{
  name: "Quince",
  image: "./public/images/autumn/quince.jpeg",
  season: "autumn",
},
{
  name: "Walnuts",
  image: "./public/images/autumn/walnuts.jpeg",
  season: "autumn",
}
  ]


Produce.create(produce)
  .then(produceResults => {
      console.log(`inserted ${produceResults.length} wohoo produce!`);
  })
    .catch(err => {
      console.log("created failure", err);
    });

