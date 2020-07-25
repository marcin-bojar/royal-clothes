import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';
import Cart from '../cart/cart.component';

import './header.styles.scss'

const Header = ({ currentUser }) => (
    <header className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' title='Crown Logo'/>
        </Link>
       
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/'>CONTACT</Link>
            {
                currentUser ? 
                <div onClick={() => auth.signOut()} className='option'>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <Cart />
        </div>
    </header>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});


export default connect(mapStateToProps)(Header);