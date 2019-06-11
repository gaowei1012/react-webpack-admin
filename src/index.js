import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import { AlitaProvider } from 'redux-alita';
// import store from './app/redux/store';
// import { Provider } from 'react-redux';
// antd
//import './styles/antd.css';

ReactDOM.render(
  <AlitaProvider>
    <Page />
  </AlitaProvider>
  , document.querySelector('#root'));
