import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  const publicKey =
    'pk_test_51HDoHeHLYoDSJCNLqIJ03vR3t05KYK7wkxqNiUEEKoBxUO2Sx5IJlPwJk9tXB5hZNEmYDakvDkGok1HOBMGAxf9600CpTWe4Lo';

  const onToken = token => {
    console.log(token);
    alert('Payment successful!');
  };

  return (
    <StripeCheckout
      amount={stripePrice}
      token={onToken}
      stripeKey={publicKey}
      name="CRWN Clothing Ltd."
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

export default StripeButton;
