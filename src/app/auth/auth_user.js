import React from 'react';
import { postRequest } from '../api/request';

class Auth extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = async () => {
   let result = await postRequest('http://localhost:3032/api/user/login')
   if (result == null) {
     console.log('登录失败，从新登录')
   } else {
     //登录成功后将用户token存在本地
     const token = result.token;
     localStorage.setItem(token, 'user-token');
     // 跳转到首页
     window.history.go('/app/dashboard/index')
   }
  }

  render() {
    return <div>this is auth</div>
  }
}

export default Auth;