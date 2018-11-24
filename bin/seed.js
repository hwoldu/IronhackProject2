require('dotenv').config();

const mongoose = require("mongoose");
const Produce = require("../models/produceSchema.js");

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
    image: "/images/winter/beet.jpg",
    season: "winter"
  },
  {
    name: "Cabbage",
    image: "/images/winter/cabbage.jpg",
    season: "winter"
  },
  {
    name: "Broccoli",
    image: "/images/winter/broccoli.jpg",
    season: "winter"
  },
  {
    name: "Brussel sprout",
    image: "/images/winter/brusselsprout.jpg",
    season: "winter"
  },
  {
    name: "Carrot",
    image: "/images/winter/carrot.jpg",
    season: "winter"
  },
  {
    name: "Collard Green",
    image: "/images/winter/collardgreen.jpg",
    season: "winter",
  },
  {
    name: "Grapefruit",
    image: "/images/winter/grapefruit.jpg",
    season: "winter",
  },
  {
    name: "Kale",
    image: "/images/winter/kale.jpg",
    season: "winter",
  },
  {
    name: "Kiwi",
    image: "/images/winter/kiwi.jpg",
    season: "winter",
  },
  {
    name: "Lemon",
    image: "/images/winter/lemon.jpg",
    season: "winter",
  },
  {
    name: "Onions",
    image: "/images/winter/onions.jpg",
    season: "winter",
  },
  {
    name: "Pears",
    image: "/images/winter/pears.jpg",
    season: "winter",
  },
  {
    name: "Persimmon",
    image: "/images/winter/persimmon.jpg",
    season: "winter"
  },
  {
    name: "Pumpkin",
    image: "/images/winter/pumpkin.jpg",
    season: "winter"

  },
  {
    name: "Squash",
    image: "/images/winter/squash.jpg",
    season: "winter"
  },
  {
    name: "Sweet Potato",
    image: "/images/winter/sweetpotato.jpg",
    season: "winter",
  },
  {
    name: "Tangerine",
    image: "/images/winter/tangerine.jpg",
    season: "winter",
  },
  {
    name: "Turnips",
    image: "/images/winter/turnips.jpg",
    season: "winter",
  },
  {
    name: "Apples",
    image: "/images/autumn/apples.jpg",
    season: "autumn",
  },
  {
    name: "Butternut",
    image: "/images/autumn/butternut.jpg",
    season: "autumn",
  },
  {
    name: "Cabbage",
    image: "/images/autumn/cabbage.jpg",
    season: "autumn",
  },
  {
    name: "Carrots",
    image: "/images/autumn/carrots.jpg",
    season: "autumn",
  },
  {
    name: "Cauliflower",
    image: "/images/autumn/cauliflower.jpg",
    season: "autumn",
  },
  {
    name: "Chestnut",
    image: "/images/autumn/chestnut.jpg",
    season: "autumn",
  },
  {
    name: "Grapes",
    image: "/images/autumn/grapes.jpg",
    season: "autumn",
  },
  {
    name: "Leeks",
    image: "/images/autumn/leeks.jpg",
    season: "autumn",
  },
  {
    name: "Parsnips",
    image: "/images/autumn/parsnips.jpg",
    season: "autumn",
  },
  {
    name: "Pears",
    image: "/images/autumn/pears.jpg",
    season: "autumn",
  },
  {
    name: "Pumpkins",
    image: "/images/autumn/pumpkins.jpg",
    season: "autumn",
  },
  {
    name: "Quince",
    image: "/images/autumn/quince.jpg",
    season: "autumn",
  },
  {
    name: "Walnuts",
    image: "/images/autumn/walnuts.jpg",
    season: "autumn",
  },
  {
    name: "Potatoes",
    image: "/images/autumn/potatoes.jpg",
    season: "autumn",
  },
  {
    name: "Fennel",
    image: "/images/autumn/fennel.jpg",
    season: "autumn",
  },
  {
    name: "Broccoli",
    image: "/images/autumn/broccoli.jpg",
    season: "autumn",
  },
  {
    name: "Artichoke",
    image: "/images/spring/artichoke.jpg",
    season: "spring",
  },
  {
    name: "Asparagus",
    image: "/images/spring/asparagus.jpg",
    season: "spring",
  },
  {
    name: "Cucumber",
    image: "/images/spring/cucumber.jpg",
    season: "spring",
  },
  {
    name: "Mushrooms",
    image: "/images/spring/mushroom.jpg",
    season: "spring",
  },
  {
    name: "Peas",
    image: "/images/spring/peas.jpg",
    season: "spring",
  },
  {
    name: "Rhubarb",
    image: "/images/spring/rhubarb.jpg",
    season: "spring",
  },
  {
    name: "Spinach",
    image: "/images/spring/spinach.jpg",
    season: "spring",
  },
  {
    name: "Broad bean",
    image: "/images/spring/broadBean.jpg",
    season: "spring",
  },
  {
    name: "Lettuce",
    image: "/images/spring/salads.jpg",
    season: "spring",
  },
  {
    name: "Chards",
    image: "/images/spring/chard.jpg",
    season: "spring",
  },
  {
    name: "Celery",
    image: "/images/spring/celery.jpg",
    season: "spring",
  },
  {
    name: "Cherries",
    image: "/images/spring/cherries.jpg",
    season: "spring",
  },
  {
    name: "Kimi",
    image: "/images/spring/kiwi.jpg",
    season: "spring",
  },
  {
    name: "Lemon",
    image: "/images/spring/lemon.jpg",
    season: "spring",
  },
  {
    name: "Radishes",
    image: "/images/spring/radishes.jpg",
    season: "spring",
  },
  {
    name: "Turnips",
    image: "/images/spring/turnips.jpg",
    season: "spring",
  },
  {
    name: "Apricot",
    image: "/images/summer/apricot.jpg",
    season: "summer",
  },
  {
    name: "Artichoke",
    image: "/images/summer/artichoke.jpg",
    season: "summer",
  },
  {
    name: "Chards",
    image: "/images/summer/chard.jpg",
    season: "summer",
  },
  {
    name: "Corn",
    image: "/images/summer/corn.jpg",
    season: "summer",
  },
  {
    name: "Cucumber",
    image: "/images/summer/cucumber.jpg",
    season: "summer",
  },
  {
    name: "Eggplant",
    image: "/images/summer/eggplant.jpg",
    season: "summer",
  },
  {
    name: "Figs",
    image: "/images/summer/figs.jpg",
    season: "summer",
  },
  {
    name: "Garden peas",
    image: "/images/summer/gardenPeas.jpg",
    season: "summer",
  },
  {
    name: "Green peas",
    image: "/images/summer/greenBeans.jpg",
    season: "summer",
  },
  {
    name: "Melon",
    image: "/images/summer/melon.jpg",
    season: "summer",
  },
  {
    name: "Peaches",
    image: "/images/summer/peaches.jpg",
    season: "summer",
  },
  {
    name: "Plums",
    image: "/images/summer/plums.jpg",
    season: "summer",
  },
  {
    name: "Rapsberries",
    image: "/images/summer/rapsberries.jpg",
    season: "summer",
  },
  {
    name: "Salads",
    image: "/images/summer/salads.jpg",
    season: "summer",
  },
  {
    name: "Strawberries",
    image: "/images/summer/strawberries.jpg",
    season: "summer",
  },
  {
    name: "Sweet peppers",
    image: "/images/summer/sweetPeppers.jpg",
    season: "summer",
  },
  {
    name: "Tomatoes",
    image: "/images/summer/tomatoes.jpg",
    season: "summer",
  }
] 


Produce.create(produce)
  .then(produceResults => {
    console.log(`inserted ${produceResults.length} wohoo produce!`);
  })
  .catch(err => {
    console.log("created failure", err);
  });

