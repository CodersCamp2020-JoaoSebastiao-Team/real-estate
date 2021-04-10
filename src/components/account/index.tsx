import './index.scss'
import AccountMenu from './menu'
import {useLocation} from "react-router-dom";
import AccountContentSettings from './settings';
import AccountContentListings from './listings';
import AccountContentReservations from './reservations';

const AccountPanel = () => {
  let userLocation = useLocation();
  const project = () => {
    switch(userLocation.pathname) {
      case "/account/settings":   return <AccountContentSettings />;
      case "/account/listings":   return <AccountContentListings />;
      case "/account/reservations": return <AccountContentReservations />;
      default:      return <h1>Hello, you!</h1>
    }
  }
  return (
        <>
      <div className="account-wrapper">
            <AccountMenu />
            <div>{project()}</div>
      </div>
      </>
    );
  };
  export default AccountPanel;