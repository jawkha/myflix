import React from 'react';

import Love from '../../assets/icons/red-heart.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      Crafted with <img src={Love} alt="heart icon" /> in Peshawar
    </footer>
  );
};

export default Footer;
