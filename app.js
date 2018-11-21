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

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var winter = "11, 12, 0";
var spring = "2, 3, 4";
var summer = "5, 6, 7";
var autumn = "8, 9, 10";


app.use((req, res, next ) => {
  
  if (new Date() === "2", "3", "4") {
    res.locals.season = "spring";
}
  else if  ( new Date () === "June", "July", "August") {
    res.locals.season = "summer";
  }
  else if (new Date () === "September", "October", "November") {
    res.locals.season = "autumn";
  }
  else if (new Date() === "November", "December", "January") {
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
