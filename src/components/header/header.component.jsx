import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss'

const Header = () => (
    <header className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' title='Crown Logo'/>
        </Link>
       
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/'>CONTACT</Link>
            <Link className='option' to='/signin'>SIGN IN</Link>
        </div>
    </header>
);

export default Header;