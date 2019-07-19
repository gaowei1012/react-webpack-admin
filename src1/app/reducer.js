/// 客户端的 reducer
import createReducer from '../utils/createReducer'

const defaultState = () => ({
  isLogin: false,
  user: {},
  loginErrorMsg: '',
  notices: [],
  notification: {
    title: '',
    content: ''
  }
})

const loginSuccess = (state, action) => ({
  ...state,
  isLogin: true,
  user: action.payload
})

const loginError = (state, action) => ({
  ...state,
  isLogin: false,
  loginErrorMsg: action.payload.data.error
})

const resteLoginErrorMsg = state => ({
  ...state,
  loginErrorMsg: ''
})


export default createReducer(defaultState, {
  APP_LOGIN_SUCCESS: loginSuccess,
  APP_LOGIN_ERROR: loginError,
  APP_RESTE_LOGIN_ERROR_MSG: resteLoginErrorMsg,
})
