import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="checkout-item__img-container">
        <img src={imageUrl} alt="item" className="checkout-item__img" />
      </div>
      <div className="checkout-item__name">
        <span>{name}</span>
      </div>
      <div className="checkout-item__quantity">
        <span>${quantity}</span>
      </div>
      <div className="checkout-item__price">
        <span>${price}</span>
      </div>
      <div
        className="checkout-item__remove"
        onClick={() => clearItemFromCart(cartItem)}
      >
        <span>&times;</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItemFromCart: item => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
