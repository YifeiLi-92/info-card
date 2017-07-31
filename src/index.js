//import {createStore, applyMiddleware} from 'redux';
//import reducers from "./reducers";
//import {Provider} from 'react-redux';

import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//import '../node_modules/react-bootstrap/'

// let store = createStore(reducers);

render(
    //<Provider store="{store}">
    <App/>,
    //</Provider>,
    document.getElementById('root'));
