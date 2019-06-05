import React, { PureComponent } from 'react'
import RegisterForm from './components/RegisterForm'
import './index.less'


export default class Register extends PureComponent {
  render() {
    return (
      <div className='rg_wrap'><RegisterForm  /></div>
    )
  }
}
