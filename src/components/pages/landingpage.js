import React, { Component } from 'react';
import FooterCallBack from '../footer/footercallback';

const logo = require('../../assets/images/logo.svg');
const track = require('../../assets/music/NWA-fuck-tha-police.mp3');
const name = 'NWA-fuck-tha-police';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <style>{"\
                .logo{\
                  visibility: hidden;\
                }\
              "}</style>
        <div className="landing-grid page-wrapper">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: '10% 15%'}}>
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
          </div>
        <FooterCallBack />
        </div>
      </div>

    )
  }
}

export default Landing;
