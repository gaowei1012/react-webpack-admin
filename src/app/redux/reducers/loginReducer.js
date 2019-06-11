import * as ActionLogin from './../constans/actionEvent';

// 定义初始化state
const initState = {
  toPath: ''
};

// login redirct path
const loginRedirctPath = (state = initState, action) => {
  if (action.type === ActionLogin.LOGIN_REDIRECT_EVENT) {
    return Object.assign({}, state, {
      toPath: action.toPath
    });
  }
  return state;
};

export default loginRedirctPath;
