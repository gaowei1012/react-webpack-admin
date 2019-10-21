
import { APP_ON_LOGOUT, APP_SET_USERINFO } from '../constans/actionEvent'

const initState = {
  userinfo: null,
  meuns: '',
  roles: '',
}

const onLogout = (state, {payload}) => {
  return Object.assign({}, state, {
    userinfo: null,
    meuns: '',
    roles: '',
  })
}

const setUserInfo = (state, { payload }) => {
  return Object.assign({}, state, {
    userinfo: payload.userinfo,
    meuns: payload.meuns,
    roles: payload.roles
  })
}


const userReducer = (state = initState, action) => {
  switch(action.type) {
    case APP_ON_LOGOUT:
      return onLogout(state, action)
    case APP_SET_USERINFO:
      return setUserInfo(state, action)
    default:
      return state;
  }
}


export default userReducer;
