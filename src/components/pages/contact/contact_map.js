import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const mapIcon = require('../../../assets/images/icons/logo_map.svg');
const mapIconClose = require('../../../assets/images/icons/close_map.svg');
const mapBackground = require('../../../assets/images/background.png');

class CustomMap extends Component {
    constructor() {
        super();

        this.state = { template: null };

        this.createTemplateLayoutFactory = ymaps => {
            if (ymaps && !this.state.template) {
                this.setState({
                    template: ymaps.templateLayoutFactory.createClass(
                        'Студия звукозаписи ЧП Studio <br />' +
                        '<style>.ymaps-2-1-72-balloon__content{ background: url("' + mapBackground +'") no-repeat right; background-size: cover;color: #ffffff}a{color: #FA5403}' +
                        '.ymaps-2-1-72-balloon__close-button{background: url("' + mapIconClose + '") no-repeat}' +
                        '.ymaps-2-1-72-balloon__layout{background: url("' + mapBackground +'") no-repeat right; background-size: cover;}</style>' +
                        'Контакты:<br />' +
                        '<a href="tel:+79181021999">89181021999</a> Денис<br />' +
                        '<a href="tel:+79284479797">89284479797</a> Александр<br />' +
                        'Адрес:<br/>' +
                        'г. Сочи, ул. Цветной бульвар, 27'
                    ),
                });
            }
        };
    }

    render() {
        return (
            <div className="map" style={{width: '100%', height: '100%'}}>
                <YMaps>
                    <Map
                        width={'100%'}
                        height={'100%'}
                        onLoad={this.createTemplateLayoutFactory}
                        state={{ center: [43.602363, 39.722416], zoom: 17}}
                        modules={['templateLayoutFactory']}
                    >
                        {this.state.template && (
                            <Placemark
                                geometry={[43.602742, 39.725586]}
                                options={{
                                    balloonContentLayout: this.state.template,
                                    iconLayout: 'default#image',
                                    iconImageHref: mapIcon,
                                    iconImageSize: [45, 56],
                                    iconImageOffset: [-22.5, -56],
                                }}
                                modules={['geoObject.addon.balloon']}
                                properties={{
                                    hintContent: 'Собственный значок метки',
                                }}

                            />
                        )}
                    </Map>
                </YMaps>
            </div>
        );
    }
}
export default CustomMap;
