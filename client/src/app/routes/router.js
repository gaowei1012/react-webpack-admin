import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import AppContainer from './../containers/AppContainer'
import Login from './../../modules/login/login'
import Register from '../../modules/register/register'
import NotFound from '../../modules/notFound/notFound'

// 权限校验,当用户为登录状态时，做路由拦截，返回登录页面。 当用户登录成功时返回dashboard页面
// 这里现在做前端登录校验，后期会做后端登录校验



class MyRouter extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
            <Route path='/' component={AppContainer} exact />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default MyRouter