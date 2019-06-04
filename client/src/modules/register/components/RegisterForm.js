import React, { Component } from 'react'
import { Form, Input, Icon, Button, Checkbox} from 'antd'
import './index.less'


class RegisterForm extends Component {

  componentDidMount() {
    console.log('注册')
  }

  handleSubmit = () => {
    console.log('submit')
  }

  readmeMd = () => {
    console.log('权限阅读')
  }

  render() {

    const formItemLayout = {
      labeCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        ms: { span: 16 }
      }
    }

    const titleFormItemLayout = {
      warpperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    }

    const { getFieldDecorator } = this.props.form
    return(
      <div className='rg_form_wrap'>
        <Form {...formItemLayout} onClick={this.handleSubmit}>
          <Form.Item label='用户名'>
            {getFieldDecorator('username', {
              rules: [{requried: true}]
            })(
              <Input type='text'
                prefix={<Icon type='user' style={{color: 'rgba(0, 0, 0, .25)'}} />}
                placeholder='请输入用户名'  
              />
            )}
          </Form.Item>
          <Form.Item label='password' hasFeedback>
            {getFieldDecorator('password', {
              rules: [{requried: true}]
            })(
              <Input type='password' 
                prefix={<Icon type='lock' style={{color: 'rgba(0, 0, 0, .25)'}} />} 
                placeholder='请输入密码'
              />
            )}
          </Form.Item>
          <Form.Item label='password' hasFeedback>
            {getFieldDecorator('password', {
              rules: [{requried: true}]
            })(
              <Input
                type='password'
                prefix={<Icon type='lock' style={{color: 'rgba(0, 0, 0, .25)'}} />}
                placeholder='请再次输入密码'
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
            {getFieldDecorator('use', {
              initialValue: true
            })(
              <Checkbox>权限阅读</Checkbox>
            )}
            <a onClick={this.handleSubmit.readmeMd}>点击查看更多</a>
          </Form.Item>
          <Form.Item>
            <Button type='default' htmlType='submit'>注册</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const NewRegisterForm = Form.create()(RegisterForm)

export default NewRegisterForm