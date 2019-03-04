import React, { Component } from 'react';
import {Cell, Grid} from "react-mdl";

const mainImage = require('../assets/images/gallery/1.jpg');
const logo = require('../assets/images/logo.svg');
const image1 = require('../assets/images/gallery/3.jpg');
const image2 = require('../assets/images/gallery/4.jpg');
const play = require('../assets/images/play.svg');
//const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

class About extends Component {
  render() {

    return(
      <div>
        <Grid className="page-wrapper">
          <div className="blackout"></div>
          <Cell col={12}>
            <div className="page-icon">
              <img src={play} alt=""/>
            </div>
            <h1 className="page-title">О НАС</h1>
            <div className="aboutus-content-wrap">
              <Cell col={4}>
                <div className='aboutus-main-image'>
                  <img src={mainImage} alt="ЧП Studio"/>
                  <img src={logo} alt="Логотип ЧП Studio" className="aboutus-logo"/>
                </div>
              </Cell>
              <Cell col={2}>
                <div className="aboutsus-secondary-pictures">
                  <div><img src={image1} alt="ЧП Studio"/></div>
                  <div><img src={image2} alt="ЧП Studio"/></div>
                </div>
              </Cell>
              <Cell col={4}>
                <div className="aboutus-text">
                  <p>С этих слов все началось. Наша студия звукозаписи с 2013 года помогает в осуществлении творческих идей начинающим и опытным исполнителям Сочи. Мы часто пишем Рэп и Поп артистов.</p>
                  <p>Помогаем раскрыться и зазвучать тем, кто записывает свою первую песню. Любим эксперименты в любых жанрах и всегда доводим работу до конца.</p>
                  <p>У нас можно записать тестовый дубль бесплатно, не переживать о времени на запись песни и доработках в сведении - всё включено!</p>
                  <p>Наша студия звукозаписи с 2013 года помогает в осуществлении.</p>
                  <p>«Что со мной случилось? – подумал он. Это не было сном. Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах».</p>
                  <br/>
                  <p style={{textAlign: 'right', opacity: '0.7', paddingTop: '60px', paddingBottom: '13px'}}>Фамилия Имя и Фамилия Имя, директора студии</p>
                </div>
                <div className="social-icons">
                  <a href="https://vk.com/4p_studio" rel="noopener noreferrer" target="_blank"><div className="vk"></div></a>
                  <a href="https://www.instagram.com/4p_studio/" rel="noopener noreferrer" target="_blank"><div className="insta"></div></a>
                </div>
              </Cell>
            </div>
          </Cell>

          <footer className="footer-aboutus-wrap">
            <div className="footer-aboutus">
              <div><a href="tel:+79181021999">8(918)1021999</a></div>
              <div><a href="tel:+79284479797">8(928)4479797</a></div>
              <div><span className="ymaps-geolink">Сочи, ул. Цветной бульвар, 27</span></div>
            </div>
          </footer>
        </Grid>
      </div>
    )
  }
}

export default About;
