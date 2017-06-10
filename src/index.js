import React from 'react';
import { render } from 'react-dom';
import Routes from './routes/routes';
import './assets/styles/bootstrap.min.css';
import './assets/styles/index.css';
import { createStore } from 'redux';
import Nav from './reducers/reducer';
import { Provider } from 'react-redux';

export const store = createStore(Nav);


render( 
    <Provider store={store}><Routes /></Provider>, document.getElementById( 'root' ) )