import React, { PureComponent } from 'react'
import LoginForm from './components/LoginForm'
import './index.less'

class Login extends PureComponent {
  render() {
    return (<div className='lg_wrap'><LoginForm /></div>)
  }
}

export default Login