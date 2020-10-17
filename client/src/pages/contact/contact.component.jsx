import React from 'react';

import ContactCard from '../../components/contact-card/contact-card.component';
import AboutAuthor from '../../components/about-author/about-author.component';

import './contact.styles.scss';

const ContactPage = () => (
  <div className="contact-page">
    <h2 className="contact-page__title">Contact</h2>
    <div className="contact-page__content">
      <ContactCard />
      <AboutAuthor />
    </div>
  </div>
);

export default ContactPage;
