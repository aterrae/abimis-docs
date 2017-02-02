import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Index from './containers/index.jsx';
import Docs from './containers/docs.jsx';

export default function getRoutes() {
    return (
        <Route path="/">
            <IndexRoute component={Index}/>
            <Route path="docs" component={Docs}/>
            <Route path="docs/*" component={Docs}/>
            <Route path="*" component={Docs}/>
        </Route>
    )
}
