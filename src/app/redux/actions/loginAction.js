import store from './../store';
import * as ActionEvent from './../constans/actionEvent';

// actions
export const setLoginRedirectUrl = toPath => {
  return store.dispatch({
    type: ActionEvent.LOGIN_REDIRECT_EVENT,
    toPath: toPath
  });
};
