import React, { Component } from 'react';
import './App.css';
import Main from './components/index';
import Header from './components/header/index';

class App extends Component {
  render() {
    return (
      <div className="big-container">
        <Header />
        <Main/>
      </div>
    );
  }
}

export default App;
