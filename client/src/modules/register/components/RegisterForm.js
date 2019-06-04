import React, { Component } from 'react'
import { Form, Input, Icon, Button } from 'antd'
import './index.less'


class RegisterForm extends Component {

  componentDidMount() {
    console.log('注册')
  }

  handleSubmit = () => {
    console.log('submit')
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return(
      <div className='rg_form_wrap'>
        <Form>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{requried: true}]
            })(
              <Input type='text'
                prefix={<Icon type='user' style={{color: 'rgba(0, 0, 0, .25)'}} />}
                placeholder='请输入用户名'  
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{requried: true}]
            })(
              <Input type='password' 
                prefix={<Icon type='lock' style={{color: 'rgba(0, 0, 0, .25)'}} />} 
                placeholder='请输入密码'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{requried: true}]
            })(
              <Input type='email' 
                prefix={<Icon type='email' style={{color: 'rgba(0, 0, 0, .25)'}} />} 
                placeholder='请输入邮箱'
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type='default' onClick={this.handleSubmit}></Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const NewRegisterForm = Form.create()(RegisterForm)

export default NewRegisterForm