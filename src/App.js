import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=los angeles&mode=json&APPID=b034d607850d9e3b5543e5449c3e7364")
    .then(res => res.json())
    .then(
      (result) =>{
        console.log(result)
      }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather App</h1>
        </header>
        <p className="App-intro">
          Add all the weather data here
        </p>
      </div>
    );
  }
}

export default App;
