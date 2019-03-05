import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutUs from './about';
import Gallery from './gallery';
import Portfolio from './portfolio';
import Price from './price';
import Contact from './contact';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={AboutUs} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/price" component={Price} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;
