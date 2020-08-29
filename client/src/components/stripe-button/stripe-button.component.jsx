import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';

import { clearCart } from '../../redux/cart/cart.actions';

const StripeButton = ({ price, clearCart }) => {
  const stripePrice = price * 100;
  const publicKey =
    'pk_test_51HDoHeHLYoDSJCNLqIJ03vR3t05KYK7wkxqNiUEEKoBxUO2Sx5IJlPwJk9tXB5hZNEmYDakvDkGok1HOBMGAxf9600CpTWe4Lo';

  const onToken = async token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        token,
        amount: stripePrice,
      },
    })
      .then(response => {
        clearCart();
        alert('Payment successful!');
      })
      .catch(error => {
        console.log(error);
        alert('Payment rejected. Please check card details');
      });
  };

  return (
    <StripeCheckout
      amount={stripePrice}
      token={onToken}
      stripeKey={publicKey}
      name="Royal Clothes Ltd."
      description={`Your total price is $${price}`}
      shippingAddress
      billingAddress
      label="Pay now"
      panelLabel="Pay now"
      image="https://sendeyo.com/up/d/f3eb2117da"
      allowRememberMe
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeButton);
