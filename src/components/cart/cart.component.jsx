import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as CartIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart.styles.scss';

const Cart = ({ toggleCartHidden }) => (
    <div className='cart' onClick={ toggleCartHidden }>
        <CartIcon className='cart__icon' />
        <span className='cart__count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())    
});

export default connect(null, mapDispatchToProps)(Cart);