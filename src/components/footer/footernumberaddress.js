import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class FooterNumberAddress extends Component {
    render() {
        return(
            <footer className="footer-about-wrap">
                <Grid className="footer-about">
                    <Cell col={4} >
                        <a href="tel:+79181021999">8(918)1021999</a>
                    </Cell>
                    <Cell col={4} >
                        <a href="tel:+79284479797">8(928)4479797</a>
                    </Cell>
                    <Cell col={4} >
                        <span className="ymaps-geolink">Сочи, ул. Цветной бульвар, 27</span>
                    </Cell>
                </Grid>
            </footer>
        )}
}
export default FooterNumberAddress;
