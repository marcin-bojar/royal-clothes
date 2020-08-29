import React from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, routeName }) => (
  <div className="collection-preview">
    <Link to={`/shop/${routeName}`} className="title">
      {title.toUpperCase()}
    </Link>
    <div className="preview">
      {items
        .filter((el, i) => i < 4)
        .map(el => (
          <CollectionItem key={el.id} item={el} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
