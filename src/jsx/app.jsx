import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
// import configureStore from './store/configureStore';
import getRoutes from './routes';

// const store = configureStore(window.INITIAL_STATE);

ReactDOM.render(
    <Router history={browserHistory} routes={getRoutes()} />,
    document.getElementById('root')
)
