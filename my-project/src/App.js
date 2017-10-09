import React, { Component } from 'react';
import logo from './logo.svg';
import './css/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="sass-box">Welcome to React</h1>

            <div className="sass-box">some words</div>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
