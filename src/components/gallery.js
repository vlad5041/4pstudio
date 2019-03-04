import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const play = require('../assets/images/play.svg');

class Price extends Component {
    render() {
        return(
            <div>
                <Grid className="page-wrapper">
                    <div className="blackout"></div>
                    <Cell col={2}>
                        <div className="page-icon">
                            <img src={play} alt=""/>
                        </div>
                    </Cell>
                    <Cell col={2}>123
                    </Cell>
                    <Cell col={2}>123
                    </Cell>
                    <Cell col={2}>123
                    </Cell>
                    <Cell col={2}>123
                    </Cell>
                    <Cell col={2}>123
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Price;
