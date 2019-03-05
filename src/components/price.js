import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const play = require('../assets/images/play.svg');

class Price extends Component {
  render() {
    return(
      <div style={{width: '80%', margin: 'auto'}}>

        <Grid className="page-wrapper">
          <div className="blackout"></div>
          <Cell col={12}>
            <div className="page-icon">
              <img src={play} alt=""/>
            </div>
          </Cell>
        </Grid>
        <Grid className="" style={{width: '80%', margin: '0 auto'}}>
          <Cell col={2} style={{height: '80%'}}>1</Cell>
          <Cell col={2} style={{height: '80%'}}>1</Cell>
          <Cell col={2} style={{height: '80%'}}>1</Cell>
          <Cell col={2} style={{height: '80%'}}>1</Cell>
          <Cell col={2} style={{height: '80%'}}>1</Cell>
          <Cell col={2} style={{height: '80%'}}>1</Cell>
        </Grid>
      </div>
    )
  }
}

export default Price;
