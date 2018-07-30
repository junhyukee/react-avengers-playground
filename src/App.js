import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { avengers: ['Thor', 'Iron Man', 'Hulk', 'Captain America'] }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Avengers: by jhk</h1>
        </header>
        <p className="App-intro">
          {this.state.avengers.map(avenger => <p>{avenger}</p>)}
        </p>
      </div>
    );
  }
}

export default App;
