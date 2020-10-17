import React from 'react';

import './contact-card.styles.scss';

const ContactCard = () => (
  <div className="contact-card">
    <div className="contact-card__details">
      <address className="contact-card__item contact-card__item--author">
        Marcin Bojar
      </address>
      <address className="contact-card__item">
        <i className="lnr lnr-phone-handset"></i> +48 517 963 931
      </address>
      <address className="contact-card__item">
        <i className="lnr lnr-envelope"></i> marcin.bojar@interia.pl
      </address>
      <address className="contact-card__item">
        <i className="lnr lnr-pointer-right"></i>
        <a href="https://github.com/marcin-bojar">GitHub profile</a>
      </address>
      <address className="contact-card__item">
        <i className="lnr lnr-pointer-right"></i>
        <a href="https://www.linkedin.com/in/marcin-bojar-5895301b7">
          LinkedIn profile
        </a>
      </address>
    </div>
  </div>
);

export default ContactCard;
