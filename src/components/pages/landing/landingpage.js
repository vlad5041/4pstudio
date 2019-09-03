import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const logo = require('../../../assets/images/logo.svg');
const track = require('../../../assets/music/NWA-fuck-tha-police.mp3');
const name = 'NWA-fuck-tha-police';

class Landing extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={2} offsetDesktop={2} phone={4} align={"middle"}>
            <img src={logo} alt=""/>
          </Cell>
          <Cell col={3}>
            <p>Немного описание студии и ее возможностей. Предложение послушать недавно записанный трек, с целью оценить качество звука и еще раз убедтьбся в правильности выбора студии ЧП.</p>
            <p>Немного описание студии и ее возможностей. Предложение послушать недавно записанный трек, с целью оценить качество звука и еще раз убедтьбся в правильности выбора студии ЧП.</p>
            <p>Немного описание студии и ее возможностей. Предложение послушать недавно записанный трек, с целью оценить качество звука и еще раз убедтьбся в правильности выбора студии ЧП. Немного описание студии и ее возможностей.</p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
