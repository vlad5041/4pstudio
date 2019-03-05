import React, { Component } from 'react';
import CustomMap from './contact_map';

const play = require('../../assets/images/play.svg');

class Contact extends Component {
  render() {
    return(
        <div className="page-content">
          <div className="blackout"></div>
          <div className="page-title">
            <div className="page-icon">
              <img src={play} alt=""/>
            </div>
            <h1 className="page-h1">Контакты</h1>
          </div>
          <div className="contact-content-wrap">

              <CustomMap />
          </div>
        </div>
    )
  }
}

export default Contact;
