import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-dropdown__items'>
        {
            cartItems.map(el => (
                <CartItem  key={el.id} item={el} />
            ))
        }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);

