import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  app: loginReducer
})

export default rootReducer;
