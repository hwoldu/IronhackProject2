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
const session      = require("express-session");
const MongoStore   = require("connect-mongo")(session);
const passport     = require("passport");


//super important & runs code inside 'passport-setup.js'
require("./config/passport/passport-setup.js");

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
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
      
hbs.registerPartials(path.join(__dirname, "views", "partials"));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(session({
  // "resave" & saveUninitialized are just here to avoid warning messages
  saveUninitialized: true,
  resave: true,

  // "secret" should be a string that is different for every app
  secret: process.env.session_secret,

  store: new MongoStore({ mongooseConnection: mongoose.connection }),

}));

// initializes passport like a middleware: 
app.use(passport.initialize());
app.use(passport.session());


app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = req.flash();
  res.locals.currentUser = req.user;
  next();
});



// seasons date change

var date = new Date();
var month = date.toString().slice(4, 7);

app.use((req, res, next ) => {
  
  if ( month === "Mar" ||  month === "Apr" || month === "May"  ) {
    res.locals.season = "spring";
}
  else if  ( month === "Jun" ||  month === "Jul" ||  month === "Aug" ) {
    res.locals.season = "summer";
  }
  else if ( month === "Sep" || month === "Oct" || month === "Nov"  ) {
    res.locals.season = "autumn";
  }
  else if ( month === "Dec" ||  month === "Jan" || month === "Feb" ) {
    res.locals.season = "winter";
  }
  
  next();
});



// default value for title local
app.locals.title = 'SZNal';


const index = require('./routes/index');
app.use('/', index);

const authRouter = require("./routes/auth-router.js");
app.use("/", authRouter);

const recipeRouter = require("./routes/recipe-router.js");
app.use("/", recipeRouter);

const adminRouter = require("./routes/admin-router.js");
app.use("/", adminRouter);






module.exports = app;
