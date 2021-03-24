import React from 'react';
import './App.scss';
import Nav from '../src/components/nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
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
