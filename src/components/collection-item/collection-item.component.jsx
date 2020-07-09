import React from 'react';

import './collection-item.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionItem = ({ name, price, imageUrl }) => (
    <div className='collection-item'>
        <img className='image' src={`${imageUrl}`}/>
        <div className='collection-item--footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
    </div>
);

export default CollectionItem;