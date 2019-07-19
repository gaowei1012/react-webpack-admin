

const CURRENT_USER_KEY = 'current-user';

const localStorage = window.localStorage;
const sessionStorage = window.sessionStorage;


/**
 * 是否有权限
 * @param {String} code 
 */
export function hasPermission(code) {
  const loginUser = getLoginUser()
  ///return loginUser?.permission?.includes(code);
}



/**
 * 获取当前用户信息
 */
export function getLoginUser() {
  const loginUser = sessionStorage.getItem(CURRENT_USER_KEY, userStr);

  return loginUser ? JSON.parse(loginUser) : null;
}

/**
 * 用户是否已登录
 */
export function isAuthenicated() {
  return !!getLoginUser();
}

/**
 * 跳转到登录页面
 */
export function toLogin() {
  const loginPath = '/login';

  // 当页面已经是login页面时候，则不需要跳转
  const pathname = window.location.pathname;
  const isLogin = pathname.indexOf(loginPath) !== -1

  if(isLogin) return null;

  /// 清除当前用户的信息
  sessionStorage.removeItem(CURRENT_USER_KEY);
  localStorage.removeItem(CURRENT_USER_KEY);

  window.location.href = '/login';

  return null;
}
