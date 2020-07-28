import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as CartIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart.styles.scss';

const Cart = ({ toggleCartHidden, cartItemsCount }) => (
  <div className="cart" onClick={toggleCartHidden}>
    <CartIcon className="cart__icon" />
    <span className="cart__count">{cartItemsCount}</span>
  </div>
);

const mapStateToProps = state => ({
  cartItemsCount: selectCartItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
