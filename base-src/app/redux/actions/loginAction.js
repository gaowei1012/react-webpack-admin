import { postRequest } from '../../api/request';
import { message } from 'antd';

// 登录
export const onLogin = (parmas = {}) = async dispatch => {
  try {
    const result = await postRequest('/api/user/login', parmas);
    return result.data;
  } catch(e) {
    message.error('网络错误，请重试'+e)
  }
}

// 退出
export const onLogout = (parmas = {}) = async dispatch => {
  try {
    dispatch({
      type: 'App.logout',
      payload: null
    })
    localStorage.removeItem('userInfo')
  } catch(e) {
    message.error('网络错误，请重试'+e)
  }
}