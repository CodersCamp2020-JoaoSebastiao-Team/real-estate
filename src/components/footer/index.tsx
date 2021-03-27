import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { FaInstagram,FaFacebookSquare, FaLinkedin , FaAt   } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText="Accept Cookies"
        cookieName="Accept_cookies"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={1}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>Accept cookies to get better experience!</span>
      </CookieConsent>
      <div className="footer-head">
        <ul>
          <Link to="/about"><li className="line-item">About us</li></Link>
          <Link to="/services"><li className="line-item">Services</li></Link>
          <Link to="/contact"><li className="line-item">Contact</li></Link>
        </ul>
      </div>
      <div className="footer-body">
        <ul className="line-item footer-left">
          <li>@2021 Real Esate App - All right reserved.</li>
          <Link to="/privacy"><li className="line-item">Privacy policy & processing personal data</li></Link>
        </ul>
        <ul className="line-item footer-right">
        <IconContext.Provider value={{ size: "2em" ,className: "social-icons" }}>
          <li><a href="https://www.instagram.com/coderscrew.pl/" target="_blank"><FaInstagram /></a></li>
          <li><a href="https://www.facebook.com/ccrew18/" target="_blank"><FaFacebookSquare /></a></li>
          <li><a href="https://www.linkedin.com/company/coderscrew/" target="_blank"><FaLinkedin /></a></li>
          <li><a href="mailto:kontakt@coderscrew.pl"><FaAt /></a></li>
          </IconContext.Provider>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
