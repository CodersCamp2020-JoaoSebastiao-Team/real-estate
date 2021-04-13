import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';
import Nav from '../src/components/nav'
import Footer from '../src/components/footer'
import Home from '../src/pages/home'
import Buy from '../src/pages/buy'
import Agent from '../src/pages/agent'
import Login from '../src/pages/login'
import Offices from '../src/pages/offices'
import Sell from '../src/pages/sell'
import Contact from '../src/pages/contact'
import About from '../src/pages/about'
import Services from '../src/pages/services'
import Privacy from '../src/pages/privacy'
import Listing from '../src/pages/listing'
import Register from '../src/pages/register'
import Reset from '../src/pages/reset_password'
import Account from '../src/pages/account'
import AccountSettings from '../src/pages/account_settings'
import AccountListings from '../src/pages/account_listings'
import AccountReservations from '../src/pages/account_reservations'
import background from './asstets/images/background.png';
import {OwnerAuthRoute} from './OwnerAuthRoute'
import {AuthRoute} from './AuthRoute'
import {useContext} from "react";

function App() {

  return (
    <div className="App">
        <Nav></Nav>
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/buy">
              <Buy />
            </Route>
            <OwnerAuthRoute path="/sell">
              <Sell />
            </OwnerAuthRoute>
            <Route path="/agent">
              <Agent />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <AuthRoute path="/account">
              <Account />
            </AuthRoute>
            <Route path="/reset_password">
              <Reset />
            </Route>
            <Route path="/offices">
              <Offices />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/listing">
              <Listing />
            </Route>
            <AuthRoute path="/account/settings">
              <AccountSettings />
            </AuthRoute>
            <AuthRoute path="/account/listings">
              <AccountListings />
            </AuthRoute>
            <AuthRoute path="/account/reservations">
              <AccountReservations />
            </AuthRoute>
          </Switch>
        </div>
        <Footer/>
    </div>
  );
}
export default App;