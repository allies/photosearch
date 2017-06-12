import React from 'react';
import { render } from 'react-dom';
import Routes from './routes/routes';
import './assets/styles/bootstrap.min.css';
import './assets/styles/index.css';
import { createStore } from 'redux';
import Nav from './reducers/reducer';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

export const store = createStore(Nav);


render( 
    <Provider store={store}>
        <Router>
            <Route component={Routes} />
        </Router>
    </Provider>, 
    document.getElementById( 'root' ) )