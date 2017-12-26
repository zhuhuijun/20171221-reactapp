import React from 'react';
import {render} from 'react-dom';
import './assets/index.less'
//组件的
import App from "./containers/index";
import {Provider} from 'react-redux';
import {configureStore} from './store';
//传入初始状态
let store = configureStore();
render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('app'));