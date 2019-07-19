import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import reducer from './reducer'


function createAppStore(history, preloadedState = {}) {
  let componseEnhancres = compose

  if (typeof window !== 'undefined') {
    componseEnhancres = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }

  const middleware = [
    routerMiddleware(history),
    reduxThunk,
    reduxLogger
  ]

  const store = createStore(
    connectRouter(history)(combineReducers(reducer)),
    preloadedState,
    componseEnhancres(applyMiddleware(...middleware))
  )

  return {
    store,
    history
  }
}

export default createAppStore