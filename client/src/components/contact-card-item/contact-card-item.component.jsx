import React from 'react';

import './contact-card-item.styles.scss';

const ContactCardItem = ({ icon, title, children }) => (
  <address
    className={`contact-card-item ${title ? 'contact-card-item--title' : ''}`}
  >
    {icon ? <i className={icon} /> : null}
    {children}
  </address>
);

export default ContactCardItem;
