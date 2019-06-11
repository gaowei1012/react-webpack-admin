import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import store from './app/redux/store';
import { Provider } from 'react-redux';
// antd
import './styles/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>
  , document.querySelector('#root'));
