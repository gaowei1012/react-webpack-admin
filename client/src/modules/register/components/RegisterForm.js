import React, { Component } from 'react'
import { Form, Input, Icon, Button, Checkbox} from 'antd'
import './index.less'


class RegisterForm extends Component {

  componentDidMount() {
    console.log('注册')
  }

  handleSubmit = (e) => {
    console.log('submit')
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) console.log(err)
      console.log(values)
    })
  }

  readmeMd = () => {
    console.log('权限阅读')
  }

  render() {

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      }
    }

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 20,
          offset: 4,
        },
      },
    };

    const { getFieldDecorator } = this.props.form
    return(
      <div className='rg_form_wrap'>
        <div className='rg_form_title_wrap'>
          <h3 className='rg_from_title_h3'>用户注册</h3>
        </div>
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
          <Form.Item label='密码' hasFeedback>
            {getFieldDecorator('password', {
              rules: [{requried: true}]
            })(
              <Input type='password' 
                prefix={<Icon type='lock' style={{color: 'rgba(0, 0, 0, .25)'}} />} 
                placeholder='请输入密码'
              />
            )}
          </Form.Item>
          <Form.Item label='确认密码' hasFeedback>
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
          <Form.Item label='邮箱'>
            {getFieldDecorator('email', {
              rules: [{requried: true}]
            })(
              <Input type='email' 
                prefix={<Icon type='email' style={{color: 'rgba(0, 0, 0, .25)'}} />} 
                placeholder='请输入邮箱'
              />
            )}
          </Form.Item>
          <Form.Item label='用户权限'>
            {getFieldDecorator('use', {
              initialValue: true
            })(
              <Checkbox>权限阅读</Checkbox>
            )}
            <a className='rg_resh_text' onClick={this.readmeMd}>点击查看更多</a>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type='default' htmlType='submit'>注册</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const NewRegisterForm = Form.create()(RegisterForm)

export default NewRegisterForm