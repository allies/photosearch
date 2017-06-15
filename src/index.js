import React from 'react';
import { render } from 'react-dom';
import Routes from './routes/routes';
import './assets/styles/bootstrap.min.css';
import './assets/styles/index.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';

render( 
        <Router>
            <Route component={Routes} />
        </Router>, 
    document.getElementById( 'root' ) )