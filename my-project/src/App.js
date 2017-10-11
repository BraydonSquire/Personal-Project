import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/index.css';
import Routers from './components/Routers'

class App extends Component {
  render() {
    return (
      <div className="App-parent">
        <Routers />
      </div>
    );
  }
}

export default App;
