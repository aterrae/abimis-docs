import React from 'react';
import { Route } from 'react-router';

import Index from './containers/Index';
import Docs from './containers/Docs';

export default function getRoutes(store) {
    return (
        <div className="full-height-slide">
            <Route exact path="/" component={Index}/>
            <Route path="/docs/:md" component={Docs}/>
        </div>
    )
}
