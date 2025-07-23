const express =  require('express');
const mongoose = require('mongoose');
//const cookieSession = require('cookie-session');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());

//-app.set('trust proxy', 1); // trust first proxy

app.use(
  session({
    secret: keys.expressKey,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
     // secure: process.env.NODE_ENV === 'production' // Send cookies over HTTPS only
    }
  })
);


app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);  
require('./routes/billingRoutes')(app);

//-if (process.env.NODE_ENV === 'production') {
  //Express will save up production assets
  //like our main.js file, main.css file!
 //- app.use(express.static('client/build'));

  //Express will serve up the index.html file
  //If it doesn't recognize the route
  //-const path = require('path');
  //-app.get('*', (req, res) => {
   //- res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  //-})
//-}

const PORT = process.env.PORT || 5000;
app.listen(PORT);