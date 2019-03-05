import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

const logo_min = require('./assets/images/logo_min.svg');

class App extends Component {
  render() {
    return (
      <div className="big-container">
        <header className="header">
            <div className="logo">
                <Link style={{textDecoration: 'none', color: '#ffffff'}} to="/">
                    <img src={logo_min} alt="Логотип ЧП Studio" className="corner-logo"/>
                </Link>
            </div>
            <nav>
                <Link to="/about"><span>О нас</span></Link>
                <Link to="/gallery"><span>Галерея</span></Link>
                <Link to="/portfolio"><span>Портфолио</span></Link>
                <Link to="/price"><span>Прайс</span></Link>
                <Link to="/contact"><span>Контакты</span></Link>
            </nav>
        </header>

        <Main/>
      </div>
    );
  }
}

export default App;
