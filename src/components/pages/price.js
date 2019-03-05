import React, { Component } from 'react';
import FooterNumberAddress from '../footer/footernumberaddress';

const play = require('../../assets/images/play.svg');
const icoService1 = require('../../assets/images/icons/price/voice.svg');
const icoService2 = require('../../assets/images/icons/price/mixing.svg');
const icoService3 = require('../../assets/images/icons/price/dynamic.svg');
const icoService4 = require('../../assets/images/icons/price/rendering.svg');
const icoService5 = require('../../assets/images/icons/price/night.svg');
const icoService6 = require('../../assets/images/icons/price/lease.svg');

class Price extends Component {
  render() {
    return(
        <div className="page-content">
          <div className="blackout"></div>
            <div className="page-title">
              <div className="page-icon">
                <img src={play} alt=""/>
              </div>
              <h1 className="page-h1">Прайс</h1>
            </div>
            <div className="price-content-wrap">
              <div className="services">
                <div className="service service1">
                  <div className="description">
                    <div><img src={icoService1} alt="Запись"/></div>
                    <h2>Запись</h2>
                    <ul>
                      <li>Запись голоса и музыкальных инструментов.</li>
                      <br/>
                      <li>Оцифровка и сохранение звука.</li>
                    </ul>
                  </div>
                  <div className="price">
                    <div className="cost">400</div>
                    <div className="units">
                      руб
                      <div>
                        час
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service service2">
                  <div className="description">
                    <div><img src={icoService2} alt="Сведение"/></div>
                    <h2>Сведение</h2>
                    <ul>
                      <li>Создание композиции из записанного материала.</li>
                      <br/>
                      <li>Установка уровней громкости, наложение художественных и прочих эффектов.</li>
                    </ul>
                  </div>
                  <div className="price">
                    <div className="cost">300</div>
                    <div className="units">
                      руб
                      <div>
                        час
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service service3">
                  <div className="description">
                    <div><img src={icoService3} alt="Мастеринг"/></div>
                    <h2>Мастеринг</h2>
                    <ul>
                      <li>Процесс финальной обработки аудиоматериала до профессионального звучания.</li>
                    </ul>
                  </div>
                  <div className="price">
                    <div className="cost">500</div>
                    <div className="units">
                      руб
                      <div>
                        час
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service service4">
                  <div className="description">
                    <div><img src={icoService4} alt="Рендеринг"/></div>
                    <h2>Рендеринг</h2>
                    <ul>
                      <li>Сохранение записанного материала мультитреком (каждую дорожку отдельно). Цена указана за одну песню.</li>
                    </ul>
                  </div>
                  <div className="price">
                    <div className="cost">100</div>
                    <div className="units">
                      руб
                      <div>
                        час
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service service5">
                  <div className="description">
                    <div><img src={icoService5} alt="Ночная запись"/></div>
                    <h2>Night</h2>
                    <ul>
                      <li>Работа в студии с 20:00-08:00.</li>
                    </ul>
                  </div>
                  <div className="price">
                    <div className="cost">700</div>
                    <div className="units">
                      руб
                      <div>
                        час
                      </div>
                    </div>
                  </div>
                </div>
                <div className="service service6">
                  <div className="description">
                    <div><img src={icoService6} alt="Аренда студии"/></div>
                    <h2>Аренда</h2>
                    <ul>
                      <li>Аренда студии для самостоятельной записи.</li>
                      <br/>
                      <li>Аренда студии в течении 12 часов 6 000 рублей.</li>
                    </ul>
                  </div>
                  <div className="price">
                    <div className="cost">1000</div>
                    <div className="units">
                      руб
                      <div>
                        час
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FooterNumberAddress />
        </div>
    )
  }
}

export default Price;
