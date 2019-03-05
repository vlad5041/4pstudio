import React, { Component } from 'react';

const play = require('../../assets/images/play.svg');

class Price extends Component {
    render() {
        return(
            <div>
                <div className="page-wrapper">
                    <div className="blackout"></div>
                    <div col={2}>
                        <div className="page-icon">
                            <img src={play} alt=""/>
                        </div>
                    </div>
                    <div col={2}>123
                    </div>
                    <div col={2}>123
                    </div>
                    <div col={2}>123
                    </div>
                    <div col={2}>123
                    </div>
                    <div col={2}>123
                    </div>
                </div>
            </div>
        )
    }
}

export default Price;
