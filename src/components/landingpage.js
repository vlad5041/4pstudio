import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const logo = require('../assets/images/logo.svg');
const track = require('../assets/music/NWA-fuck-tha-police.mp3');
const name = 'NWA-fuck-tha-police';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <style dangerouslySetInnerHTML={{__html: `
          .mdl-layout-title a { display: none }
        `}} />
        <Grid className="landing-grid page-wrapper">
          <Cell col={12} style={{position:'fixed', top:'290px', left:'271px'}}>
            <div className="big-logo">
              <img src={logo} alt="Логотип ЧП Studio"/>
            </div>
            <div className="banner-text">
              <p>Немного описание студии и ее возможностей. Предложение послушать недавно записанный трек, с целью оценить качество звука и еще раз убедтьбся в правильности выбора студии ЧП.</p>
              <p>Немного описание студии и ее возможностей. Предложение послушать недавно записанный трек, с целью оценить качество звука и еще раз убедтьбся в правильности выбора студии ЧП.</p>
              <p>Немного описание студии и ее возможностей. Предложение послушать недавно записанный трек, с целью оценить качество звука и еще раз убедтьбся в правильности выбора студии ЧП.
              Немного описание студии и ее возможностей. Предложение послушать недавно записанный трек, с целью оценить качество звука и еще раз убедтьбся в правильности выбора студии ЧП.</p>
              {name} <br/>
              <audio
                  controls
                  src={track}
                  title={name}>
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          </Cell>
          <footer className="footer-main">
            <a href="tel:+79181021999">Связаться с нами</a>
          </footer>
        </Grid>
      </div>

    )
  }
}

export default Landing;
