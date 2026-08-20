const express = require('express');
const mongoose = require('mongoose');

const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.set('trust proxy', 1);

// Stripe webhook MUST come before bodyParser.json()
app.use(
  '/api/stripe/webhook',
  express.raw({ type: 'application/json' })
);

// Normal JSON requests
app.use(bodyParser.json());


app.use(
  session({
    secret: keys.expressKey,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === 'production'
    }
  })
);


app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


if (process.env.NODE_ENV === 'production') {

  const path = require('path');

  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname, 'client', 'build', 'index.html')
    );
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://${PORT}`);
});

module.exports = app;