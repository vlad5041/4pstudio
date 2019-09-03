import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/landing/landingpage';
import AboutUs from './pages/about/about';
import Gallery from './pages/gallery/gallery';
import Portfolio from './pages/portfolio/portfolio';
import Price from './pages/price/price';
import Contact from './pages/contact/contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/price" component={Price} />
        <Route path="/contact" component={Contact} />
    </Switch>
);

export default Main;
