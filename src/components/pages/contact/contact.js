import React, { Component } from 'react';
import CustomMap from './contact_map';

const play = require('../../../assets/images/play.svg');

class Contact extends Component {
  render() {
    return(
        <div className="page-content">
          <div className="contact-content-wrap">
              <div className="contact-description">
                  <div className="page-title contact-page-title">
                      <div className="page-icon">
                          <img src={play} alt=""/>
                      </div>
                      <h1 className="page-h1">Контакты</h1>
                  </div>
                  <div className="contacts">
                      <div className="phone">
                          <h2>Телефоны</h2>
                          <ul>
                              <li>Александр<a href="tel:+79284479797">+7(928)447-97-97</a></li>
                              <li>Денис<a href="tel:+79181021999">+7(918)102-19-99</a></li>
                          </ul>
                      </div>
                      <div className="address">
                          <h2>Адрес</h2>
                          <p>г.Сочи, ул. Цветной бульвар 27</p>
                      </div>
                      <div className="social-icons">
                          <a href="https://vk.com/4p_studio" rel="noopener noreferrer" target="_blank"><div className="vk"></div></a>
                          <a href="https://www.instagram.com/4p_studio/" rel="noopener noreferrer" target="_blank"><div className="insta"></div></a>
                      </div>
                  </div>
              </div>
              <div className="contact-map">
                  <CustomMap />
              </div>
          </div>
        </div>
    )
  }
}

export default Contact;
