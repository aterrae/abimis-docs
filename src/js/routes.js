import React from 'react';
import { Route } from 'react-router';

import Index from './containers/Index';
import Docs from './containers/Docs';
import Playground from './containers/Playground';

export default function getRoutes(store) {
    return (
        <div className="full-height-slide">
            <Route exact path="/" component={Index}/>
            <Route path="/docs/:md" component={Docs}/>
            <Route exact path="/playground" component={Playground}/>
            <Route path="/playground/:component" component={Playground}/>
        </div>
    )
}
