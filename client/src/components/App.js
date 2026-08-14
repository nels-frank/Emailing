import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
   componentDidMount() {
      this.props.fetchUser();
   }

   render() {
      return (
         <BrowserRouter>
            <div className="container">
               <Header />

               <Route exact path="/" render={() => (
                  <div style={{ textAlign: 'center', marginTop: '50px' }}>
                     <h1>Login to Emailing</h1>

                     <a href="/auth/google" className="btn">
                        Login With Google
                     </a>
                  </div>
               )} />

               <Route exact path="/surveys" component={Dashboard} />

               <Route path="/surveys/new" component={SurveyNew} />
            </div>
         </BrowserRouter>
      );
   }
}

export default connect(null, actions)(App);