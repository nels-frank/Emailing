import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import App from './components/App';
import reducers from './reducers';
//Development only axios helpers
import axios from 'axios';
window.axios = axios;
// Load Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

// Create Redux store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// Get root DOM element and attach React root
const container = document.getElementById('root');
const root = createRoot(container);

// Render app with Stripe Elements and Redux Provider
root.render(
  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </Provider>
);

// Debug logs (optional)
console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
console.log('Environment is', process.env.NODE_ENV);
