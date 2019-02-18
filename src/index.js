import React from 'react';
import ReactDOM from 'react-dom';
import './libs/font';
import App from './components/App';
import './assets/css/base.css'
import {BrowserRouter,Route} from 'react-router-dom';

import store from './store'
import {Provider} from 'react-redux'




ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>    
    , document.getElementById('root'));


