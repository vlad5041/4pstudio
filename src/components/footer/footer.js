import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPageFooter from './footercallback';
import AboutPageFooter from './footernumberaddress';

const Footer = () => (
    <Switch>
        <Route path="/about" component={AboutPageFooter} />
        <Route path="/price" component={AboutPageFooter} />
        <Route path="/" component={LandingPageFooter} />
    </Switch>
)

export default Footer;
