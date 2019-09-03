import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Header, Drawer, Navigation } from 'react-mdl';

const logo_min = require('../../assets/images/logo_min.svg');

class MainHeader extends Component {
    render() {
        return(
            <header>
                <Header transparent title="ЧП Studio" style={{color: 'white'}}>
                    <Navigation>
                        <Link to="/about"><span>О нас</span></Link>
                        <Link to="/gallery"><span>Галерея</span></Link>
                        <Link to="/portfolio"><span>Портфолио</span></Link>
                        <Link to="/price"><span>Прайс</span></Link>
                        <Link to="/contact"><span>Контакты</span></Link>
                    </Navigation>
                </Header>
                <Drawer title="ЧП Studio">
                    <Navigation>
                        <Link to="/about"><span>О нас</span></Link>
                        <Link to="/gallery"><span>Галерея</span></Link>
                        <Link to="/portfolio"><span>Портфолио</span></Link>
                        <Link to="/price"><span>Прайс</span></Link>
                        <Link to="/contact"><span>Контакты</span></Link>
                    </Navigation>
                </Drawer>
            </header>
        )}
}
export default MainHeader;
