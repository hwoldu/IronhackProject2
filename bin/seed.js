require('dotenv').config();

const mongoose = require("mongoose");
const Produce = require("../models/produce-list.js");

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const produce = [
  {
    name: "Beetroot",
    image: "/images/winter/beet.jpeg",
    season: "winter"
  },
  {
    name: "Broccoli",
    image: "/images/winter/broccoli.jpeg",
    season: "winter"
  },
  {
    name: "Brussel sprout",
    image: "/images/winter/brusselsprout.jpeg",
    season: "winter"
  },
  {
    name: "Carrot",
    image: "/images/winter/carrot.jpeg",
    season: "winter"
  },
  {
    name: "Collard Green",
    image: "/images/winter/collardgreen.jpeg",
    season: "winter",
  },
  {
    name: "Grapefruit",
    image: "/images/winter/grapefruit.jpeg",
    season: "winter",
  },
  {
    name: "Kale",
    image: "/images/winter/kale.jpeg",
    season: "winter",
  },
  {
    name: "Kiwi",
    image: "/images/winter/kiwi.jpeg",
    season: "winter",
  },
  {
    name: "Lemon",
    image: "/images/winter/lemon.jpeg",
    season: "winter",
  },
  {
    name: "Onions",
    image: "/images/winter/onion.jpeg",
    season: "winter",
  },
  {
    name: "Persimmom",
    image: "/images/winter/persimmom.jpeg",
    season: "winter"
  },
  {
    name: "Pumpkin",
    image: "/images/winter/pumpkin.jpeg",
    season: "winter"

  },
  {
    name: "Squash",
    image: "/images/winter/squash.jpeg",
    season: "winter"
  },
  {
    name: "Sweet Potato",
    image: "/images/winter/sweetpotato.jpeg",
    season: "winter",
  },
  {
    name: "Tangerine",
    image: "/images/winter/tangerine.jpeg",
    season: "winter",
  },
  {
    name: "Turnips",
    image: "/images/winter/turnips.jpeg",
    season: "winter",
  },
  {
    name: "Apples",
    image: "/images/autumn/apples.jpeg",
    season: "autumn",
  },
  {
    name: "Butternut",
    image: "/images/autumn/butternut.jpeg",
    season: "autumn",
  },
  {
    name: "Cabbage",
    image: "/images/autumn/cabbage.jpeg",
    season: "autumn",
  },
  {
    name: "Cauliflower",
    image: "/images/autumn/cauliflower.jpeg",
    season: "autumn",
  },
  {
    name: "Chestnut",
    image: "/images/autumn/chestnut.jpeg",
    season: "autumn",
  },
  {
    name: "Grapes",
    image: "/images/autumn/grapes.jpeg",
    season: "autumn",
  },
  {
    name: "Leeks",
    image: "/images/autumn/leeks.jpeg",
    season: "autumn",
  },
  {
    name: "Parsnips",
    image: "/images/autumn/parsnips.jpeg",
    season: "autumn",
  },
  {
    name: "Pears",
    image: "/images/autumn/pears.jpeg",
    season: "autumn",
  },
  {
    name: "Pumpkins",
    image: "/images/autumn/pumpkins.jpeg",
    season: "autumn",
  },
  {
    name: "Quince",
    image: "/images/autumn/quince.jpeg",
    season: "autumn",
  },
  {
    name: "Walnuts",
    image: "/images/autumn/walnuts.jpeg",
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

