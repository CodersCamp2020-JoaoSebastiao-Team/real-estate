import './index.scss';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from './real-estate-logo.png';
import { slide as Menu } from 'react-burger-menu';
import { FaUser } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { UserContext } from "../../userProvider";
import { userTypes } from '../../enums'

const Nav = () => {
  const { user, logout } = useContext(UserContext)
  return (
    <div>
      <div className="flex-wrapper">
        <div className="nav-left line-item item-half">
          <ul>
            <Link to="/buy"><li className="line-item">Buy</li></Link>
            {user.type === userTypes.owner && <Link to="/sell"><li className="line-item">Sell</li></Link>}
            <Link to="/agent"><li className="line-item">Agent Finder</li></Link>
          </ul>
        </div>
        <div className="nav-center line-item">
          <Link to="/">
            <img src={logo} alt="Logo" className="nav-logo"></img>
          </Link>
        </div>
        <div className="nav-right line-item item-half">
          <ul>
            <Link to="/offices"><li className="line-item">Offices</li></Link>

            {user.auth ?
              <>
                <IconContext.Provider value={{ size: "1.5em", className: "social-icons" }}>
                  <Link to="/account"><li className="line-item"><FaUser /></li></Link>
                </IconContext.Provider>
                <Link to="/home" onClick={logout}><li className="line-item">Sign out</li></Link>
              </> :
              <Link to="/login"><li className="line-item">Sign in</li></Link>}

          </ul>
        </div>
        <div className="nav-mobile">
          <Menu right noOverlay>
            <Link to="/" className="menu-item" id="home">Home</Link>
            <Link to="/buy" className="menu-item" id="buy">Buy</Link>
            <Link to="/sell" className="menu-item" id="sell">Sell</Link>
            <Link to="/agent" className="menu-item" id="agent">Agent Finder</Link>
            <Link to="/offices" className="menu-item" id="offices">Offices</Link>
            {user.auth ?
              <>

                <Link to="/account"><li className="line-item">Account</li></Link>
                <Link to="/home" onClick={logout}><li className="line-item">Sign out</li></Link>
              </> :
              <Link to="/login"><li className="line-item">Sign in</li></Link>}
          </Menu>
        </div>
      </div>
    </div>
  );
};
export default Nav;
