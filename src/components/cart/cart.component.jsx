import React from 'react';

import { ReactComponent as CartIcon } from '../../assets/shopping-bag.svg';

import './cart.styles.scss';

const Cart = () => (
    <div className='cart'>
        <CartIcon className='cart__icon' />
        <span className='cart__count'>0</span>
    </div>
);

export default Cart;