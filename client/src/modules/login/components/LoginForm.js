import React, { Component } from 'react'
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import './index.less'

class LoginForm extends Component {

  componentDidMount() {

  }

  render() {

    const { getFieldDecorator } = this.props.form

    return (
      <div className='lg_form'>
        <Form>
          <Form.Item>
            {
              getFieldDecorator('username', {
                rules: [{ required: true }]
              })(
                <Input
                  prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type='text'
                  placeholder='请输入用户名'
                />
              )
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('password', {
                rules: [{ required: true }]
              })(
                <Input
                  prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type='text'
                  placeholder='请输入用密码'
                />
              )
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('remember', {
                initialValue :true,
                valuePropsName: 'checked'
              })(
                <Checkbox>选我</Checkbox>
              )
            }
            <a className='lg_form_link' onClick={this.handlerReficet}>没有账号?请注册</a>
          </Form.Item>
          <Form.Item>
            <Button type='primary' className='lg_form_bt'>注册</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const NewForm = Form.create()(LoginForm)

export default NewForm