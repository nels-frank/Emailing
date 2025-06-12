const express =  require('express');
const mongoose = require('mongoose');
//const cookieSession = require('cookie-session');
const session = require('express-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

//app.use(
    // cookieSession({
      // maxAge: 30 * 24 * 60 * 60 * 1000,
      // keys: [keys.cookieKey]
   // })
//);

//app.use(
  //session({
    //secret: keys.expressKey,
    //resave: false,
    //saveUninitialized: false,
    //cookie: {
     // maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    //}
  //})
//);

app.set('trust proxy', 1); // trust first proxy

app.use(
  session({
    secret: keys.expressKey,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === 'production' // Send cookies over HTTPS only
    }
  })
);


app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);  

const PORT = process.env.PORT || 5000;
app.listen(PORT);