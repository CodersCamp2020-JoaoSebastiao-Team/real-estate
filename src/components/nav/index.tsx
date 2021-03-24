import './index.scss';
import React from 'react';

const Nav = () => {
  return (
    <div className="flex-wrapper">
      <div className="nav-left line-item item-half">
        <ul>
          <li className="line-item">Buy</li>
          <li className="line-item" >Sell</li>
          <li className="line-item">Agent Finder</li>
        </ul>
      </div>
      <div className="nav-center line-item">
        <img src="../../real-estate-logo.png"></img>
      </div>
      <div className="nav-right line-item item-half">
        <ul>
          <li className="line-item">Offices</li>
          <li className="line-item">Sign in</li>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
