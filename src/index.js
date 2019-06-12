import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import { AlitaProvider } from 'redux-alita';
import './style/lib/animate.css';
import './style/antd/index.less';
import './style/index.less';

ReactDOM.render(
  <AlitaProvider>
    <Page />
  </AlitaProvider>
  , document.querySelector('#root'));
