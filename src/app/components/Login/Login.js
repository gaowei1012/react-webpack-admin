import React, { Component } from 'react';
import { Form, Input, Icon, Checkbox, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { postRequest } from './../../api/request';
import './index.less';

class LoginForm extends Component {
  // init state
  state = {
    isHasFeedback: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, value) => {
      console.log(value);
      if (err) {
        message.error('error');
        throw new Error(err);
      }
      postRequest('user/login', value).then(res => {
        console.log(res);
      });
    });
  };

  // handleSubmit = (e, value) => {
  //   if (!value) {
  //     message.info('请输入用户名密码')
  //   }
  //   e.preventDefault();
  //   let data = this.props.form.getFieldsValue()
  //   // 登录
  //   postRequest('user/login', data).then(res => {
  //     if (res.code == 1 && res.success == true) {
  //       // 跳转到首页
  //       window.history.push('/');
  //     }
  //   })
  // }

  // 用户名校验
  checkUserName = (rule, value, callback) => {
    let rge = /[A-Za-z0-9_\-\u4e00-\u9fa5]+/;
    if (!value) {
      callback('用户名不能为空');
    } else if (!rge.test(value)) {
      callback('用户名必须是字符或数字');
    } else {
      callback();
    }
  };

  // 密码校验
  checkPassword = (rule, value, callback) => {
    let rge = /^[a-z0-9_-]{6,18}$/;
    if (!value) {
      callback('密码不能为空');
    } else if (!rge.test(value)) {
      callback('用户名密码必须是数组或字母');
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="lg_wrap">
        <Form onSubmit={this.handleSubmit} className="lg_form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ validator: this.checkUserName }]
            })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ validator: this.checkPassword }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Checkbox>选我</Checkbox>
            <Link to="/register" className="lg_form_link">
              <span>没有账号？请注册</span>
            </Link>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="lg_form_bt">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const NewForm = Form.create({})(LoginForm);

export default NewForm;
