import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div>
        <h1> Weather Report in Fahrenheit</h1>
        <Search/>
      </div>
    );
  }
}

export default App;
