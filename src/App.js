import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

const logo_min = require('./assets/images/logo_min.svg');

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={
            <Link style={{textDecoration: 'none', color: 'white'}} to="/">
                <img src={logo_min} alt="Логотип ЧП Studio" className="corner-logo"/>
            </Link
            >} scroll>
            <Navigation>
                <Link to="/about"><span>О нас</span></Link>
                <Link to="/gallery"><span>Галерея</span></Link>
                <Link to="/portfolio"><span>Портфолио</span></Link>
                <Link to="/price"><span>Прайс</span></Link>
                <Link to="/contact"><span>Контакты</span></Link>
            </Navigation>
        </Header>
        <Drawer title={
            <Link style={{textDecoration: 'none', color: 'black'}} to="/">
                <img src={logo_min} alt="Логотип ЧП Studio"/>
            </Link>
        }>
            <Navigation>
                <Link to="/about"><span>О нас</span></Link>
                <Link to="/gallery"><span>Галерея</span></Link>
                <Link to="/portfolio"><span>Портфолио</span></Link>
                <Link to="/price"><span>Прайс</span></Link>
                <Link to="/contact"><span>Контакты</span></Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
