import React from 'react';
import image from '../../assets/MarcinBojar.jpg';

import './about-author.styles.scss';

const AboutAuthor = () => (
  <div className="about-author">
    <img className="about-author__img" src={image} alt="Author" />
    <p className="about-author__text">
      Highly motivated junior frontend developer trying to enter the world of
      commercial software development. Already familiar with JavaScript, CSS3,
      and HTML5, yet constantly improving skills - currently by diving deep into
      React library. Please check out my GitHub account to see projects I've
      already worked on.
    </p>
  </div>
);

export default AboutAuthor;
