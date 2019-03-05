import React, { Component } from 'react';
import {Link} from "react-router-dom";

const logo_min = require('../../assets/images/logo_min.svg');

class Header extends Component {
    render() {
        return(
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
        )}
}
export default Header;
