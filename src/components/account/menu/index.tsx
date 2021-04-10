import './index.scss'
import { Link } from 'react-router-dom';

const AccountMenu = () => {
    return (
        <>
            <ul className="account-menu__wrapper">
                <Link to="/account/listings"><li className="line-item">Listings</li></Link>
                <Link to="/account/reservations"><li className="line-item">Reservations</li></Link>
                <Link to="/account/settings"><li className="line-item">Settings</li></Link>
            </ul>
            <div className="underline-decoration"></div>
        </>
    );
};
export default AccountMenu;