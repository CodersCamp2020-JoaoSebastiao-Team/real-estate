import './index.scss';
import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-head">
        <ul>
          <Link to="/about"><li className="line-item">About us</li></Link>
          <Link to="/services"><li className="line-item">Services</li></Link>
          <Link to="/contact"><li className="line-item">Contact</li></Link>
        </ul>
      </div>
      <div>
      <ul className="line-item footer-left">
          <li>@2021 Real Esate App - All right reserved.</li>
          <Link to="/privacy"><li className="line-item">Privacy policy & processing personal data</li></Link>
      </ul>
      <ul className="line-item footer-right">
          <li>Cookies</li>
          <li>FB</li>
          <li>Insta</li>

      </ul>
      </div>
    </div>
  );
};
export default Footer;
