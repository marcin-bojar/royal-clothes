import React from 'react';

import ContactCardItem from '../contact-card-item/contact-card-item.component';

import './contact-card.styles.scss';

const ContactCard = () => (
  <div className="contact-card">
    <div className="contact-card__details">
      <ContactCardItem title>Marcin Bojar</ContactCardItem>

      <ContactCardItem icon="lnr lnr-phone-handset">
        +48 517 963 931
      </ContactCardItem>

      <ContactCardItem icon="lnr lnr-envelope">
        marcin.bojar@interia.pl
      </ContactCardItem>

      <ContactCardItem icon="lnr lnr-pointer-right">
        <a href="https://github.com/marcin-bojar">GitHub profile</a>
      </ContactCardItem>

      <ContactCardItem icon="lnr lnr-pointer-right">
        <a href="https://www.linkedin.com/in/marcin-bojar-5895301b7">
          LinkedIn profile
        </a>
      </ContactCardItem>
    </div>
  </div>
);

export default ContactCard;
