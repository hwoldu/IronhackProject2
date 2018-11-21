require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const flash        = require('connect-flash');
// const MongoStore   = require("connect-mongo")(session);
const passport     = require("passport");
const session      = require("express-session");


//super important & runs code inside 'passport-setup.js'
require("./config/passport/passport-setup.js");


mongoose
  .connect('mongodb://localhost/project-two', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// initializes passport like a middleware: 
app.use(passport.initialize());
app.use(passport.session());

// seasons date change? 
app.use((req, res, next ) => {
  
  if (newDate(March 20 >= ) ) {
    res.locals.season = "spring";
  }
  else if (season=== 5 || 6 || 7 ) {
    res.locals.season = "summer";
  }
  else if (season=== 8 || 9 || 10 ) {
    res.locals.season = "autumn";
  }
  else if (season=== 11 || 0 || 1 ) {
    res.locals.season = "winter";
  }
  
  next();
});



// default value for title local
app.locals.title = 'Cooking safely';


const index = require('./routes/index');
app.use('/', index);

const authRouter = require("./routes/auth-router.js");
app.use("/", authRouter);

const recipeRouter = require("./routes/recipe-router.js");
app.use("/", recipeRouter);

const adminRouter = require("./routes/admin-router.js");
app.use("/", adminRouter);



module.exports = app;
