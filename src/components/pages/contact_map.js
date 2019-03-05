import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const myIcon = require('../../assets/images/logo_min.svg');

class CustomMap extends Component {
    constructor() {
        super();

        this.state = { template: null };

        this.createTemplateLayoutFactory = ymaps => {
            if (ymaps && !this.state.template) {
                this.setState({
                    template: ymaps.templateLayoutFactory.createClass(
                        'Студия звукозаписи<br />' +
                        '<img src="' + myIcon + '" alt=""/> ЧП Studio <br />' +
                        'Контакты:<br />' +
                        '<a href="tel:+79181021999">89181021999</a> Денис<br />' +
                        '<a href="tel:+79284479797">89284479797</a> Александр<br />'
                    ),
                });
            }
        };
    }

    render() {
        return (
            <div className="map">
                <YMaps>
                    <Map
                        // Event handler was moved from onApiAvaliable on YMaps to onLoad on Map
                        onLoad={this.createTemplateLayoutFactory}
                        state={{ center: [43.602778, 39.725621], zoom: 15, width: 1920, height: 1280 }}
                        // We are also loading `templateLayoutFactory` additionally to Map
                        modules={['templateLayoutFactory']}
                    >
                        {this.state.template && (
                            <Placemark
                                geometry={[43.602778, 39.725621]}
                                options={{
                                    balloonContentLayout: this.state.template,
                                    iconLayout: 'default#image',
                                    iconImageHref: myIcon,
                                    iconImageSize: [30, 42],
                                    iconImageOffset: [-3, -42],
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
