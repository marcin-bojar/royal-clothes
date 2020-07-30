import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <div className="checkout-item">
    <div className="checkout-item__img-container">
      <img src={imageUrl} alt="item" className="checkout-item__img" />
    </div>
    <div className="checkout-item__name">
      <span>{name}</span>
    </div>
    <div className="checkout-item__quantity">
      <span> {`< ${quantity} >`} </span>
    </div>
    <div className="checkout-item__price">
      <span>${price}</span>
    </div>
    <div className="checkout-item__remove">
      <span>&times;</span>
    </div>
  </div>
);

export default CheckoutItem;
