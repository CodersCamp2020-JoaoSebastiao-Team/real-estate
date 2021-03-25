import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';
import Nav from '../src/components/nav'
import Home from '../src/pages/home'
import Buy from '../src/pages/buy'
import Agent from '../src/pages/agent'
import Login from '../src/pages/login'
import Offices from '../src/pages/offices'
import Sell from '../src/pages/sell'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Nav></Nav>
        <div>
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
          </Switch>
        </div>
      </Router>
        <p>
          When you’re looking for a place, we’re ready to help.
        </p>
        <a
          className="App-link"
          href="/"
          target="_self"
          rel="noopener noreferrer"
        >
          Real Estate App
        </a>
      </header>
    </div>
  );
}

export default App;