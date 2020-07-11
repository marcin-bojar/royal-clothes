import React from 'react';

import './collection-item.styles.scss'


const CollectionItem = ({ name, price, imageUrl }) => (
    <div className='collection-item'>
        <img className='image' src={`${imageUrl}`} alt='Item'/>
        <div className='collection-item--footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
    </div>
);

export default CollectionItem;