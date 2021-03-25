import React from 'react';
import {
  BrowserRouter as Router,
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

function App() {
  return (
    <div className="App">
        <Router>
        <Nav></Nav>
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/buy">
              <Buy />
            </Route>
            <Route path="/sell">
              <Sell />
            </Route>
            <Route path="/agent">
              <Agent />
            </Route>
            <Route path="/Login">
              <Login />
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
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;