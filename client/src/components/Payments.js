import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Payments extends Component {
  handlePayment = async () => {
    try {
      const res = await axios.post('/api/stripe');

      window.location.href = res.data.url;

    } catch (err) {
      console.error('Payment Error:', err);

      alert(
        'Unable to start payment. Please try again.'
      );
    }
  };

  render() {
    return (
      <button
        className="btn"
        onClick={this.handlePayment}
      >
        Add Credits
      </button>
    );
  }
}

export default connect(null)(Payments);