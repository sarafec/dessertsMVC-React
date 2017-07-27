import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import Main from './main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Link className="header" to={`/dessertsMVC-React/`}>
      <div className="jumbotron-photo"></div>
      <div className="title">DessertsMVC with </div>
      <img src={logo} className="js-library-image" alt="react logo" /></Link>
      <Main />
	</div>
    );
  }
}

export default App;
