import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;

      case false:
        return (
          <li>
            <a href="/auth/google">
              Login With Google
            </a>
          </li>
        );

      default:
        return [
          <li key="1" className="payment-item">
            <Payments />
          </li>,

          <li key="3" className="credit-item">
            Credits: {this.props.auth.credits}
          </li>,

          <li key="2">
            <a href="/api/logout">
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="header-nav">
        <div className="nav-wrapper">

          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="brand-logo"
          >
            Emailing
          </Link>

          <ul className="right header-menu">
            {this.renderContent()}
          </ul>

        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);