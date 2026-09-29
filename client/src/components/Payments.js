import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {FiCreditCard} from 'react-icons/fi';

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
        className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-200"
        onClick={this.handlePayment}
      >
      <FiCreditCard className="h-5 w-5" />
        Add Credits
      </button>
    );          
  }
}

export default connect(null)(Payments);