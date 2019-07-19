
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
    case 'App.onLogout':
      return onLogout(state, action)
    case 'App.setUserInfo':
      return setUserInfo(state, action)
    default:
      return state;
  }
}


export default userReducer;
