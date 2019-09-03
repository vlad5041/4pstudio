import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPageFooter from './footercallback';
import AboutPageFooter from './footernumberaddress';
import emptyFooter from "./emptyFooter";

const Footer = () => (
    <Switch>
        <Route path="/about" component={AboutPageFooter} />
        <Route path="/price" component={AboutPageFooter} />
        <Route path="/gallery" component={emptyFooter} />
        <Route path="/contact" component={emptyFooter} />
        <Route path="/portfolio" component={emptyFooter} />
        <Route path="/" component={LandingPageFooter} />
    </Switch>
);

export default Footer;
