import React, { Component } from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout } from 'react-mdl';
import Main from './components/index';
import MainHeader from './components/header/index';
import Footer from './components/footer';
const backImage = "assets/images/background.png";

class App extends Component {
  render() {
    return (
      <div>
        <Layout style={{}}>
          <MainHeader />
          <Main/>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
