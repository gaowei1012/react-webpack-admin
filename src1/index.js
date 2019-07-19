import React from 'react'
import ReactDOM from 'react-dom'
import { createApp, initClient, createStore } from './app'
import {createBrowserHistory} from 'history'
import 'antd/dist/antd.css'

const { store ,history } = createStore(createBrowserHistory(), {}) 
const appliction = createApp(store, history)

initClient(store.dispatch)

ReactDOM.render(appliction, window.document.querySelector('#root'))