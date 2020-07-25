import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss'


const CollectionItem = ({ name, price, imageUrl }) => (
    <div className='collection-item'>
        <img className='image' src={`${imageUrl}`} alt='Item'/>
        <div className='collection-item--footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <CustomButton inverted>Add to cart</CustomButton>
    </div>
);

export default CollectionItem;