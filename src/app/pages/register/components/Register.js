import React, { Component } from 'react';
import { Form, Input, Icon, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import '../index.less';

class RegisterForm extends Component {
  state = {
    isHasFeedBack: false
  };

  componentDidMount() {
    console.log('注册');
  }

  handleSubmit = e => {
    e.preventDefault();
    let data = this.props.form.getFieldsValue();
    console.log(data);
  };

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

  checkPassword = (rule, value, callback) => {
    // 密码校验，校验两次用户输入的使用相同
    let rge = /^[a-z0-9_-]{6,18}$/;
    if (!value) {
      callback('密码不能为空');
    } else if (!rge.test(value)) {
      callback();
    } else {
      callback();
    }
  };

  checkEmail = (rule, value, callback) => {
    let reg = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/;
    if (!value) {
      callback('邮箱不能为空');
    } else if (!reg.test(value)) {
      callback('邮箱格式不正确');
    } else {
      callback();
    }
  };

  render() {
    const { isHasFeedBack } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 20,
          offset: 4
        }
      }
    };

    const { getFieldDecorator } = this.props.form;
    return (
      <div className="rg_form_wrap">
        <div className="rg_form_title_wrap">
          <h3 className="rg_from_title_h3">用户注册</h3>
        </div>
        <Form onSubmit={this.handleSubmit} {...formItemLayout}>
          <Form.Item label="用户名" hasFeedback={isHasFeedBack}>
            {getFieldDecorator('username', {
              rules: [{ validator: this.checkUserName }]
            })(<Input type="text" prefix={<Icon type="user" style={{ color: 'agba(0, 0, 0, .25)' }} />} />)}
          </Form.Item>
          <Form.Item label="密码" hasFeedback={isHasFeedBack}>
            {getFieldDecorator('password', {
              rules: [{ validator: this.checkPassword }]
            })(<Input type="password" prefix={<Icon type="lock" style={{ color: 'agba(0, 0, 0, .25)' }} />} />)}
          </Form.Item>
          <Form.Item label="确认密码" hasFeedback={isHasFeedBack}>
            {getFieldDecorator('newPassword', {
              rules: [{ validator: this.checkPassword }]
            })(<Input type="password" prefix={<Icon type="lock" style={{ color: 'agba(0, 0, 0, .25)' }} />} />)}
          </Form.Item>
          <Form.Item label="邮箱" hasFeedback={isHasFeedBack}>
            {getFieldDecorator('email', {
              rules: [{ validator: this.checkEmail }]
            })(<Input type="email" prefix={<Icon type="mail" style={{ color: 'agba(0, 0, 0, .25)' }} />} />)}
            <Link to="/login" className="rg_resh_text">
              <span>已有账号?请登录</span>
            </Link>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button htmlType="submit" type="primary">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const NewRegisterForm = Form.create()(RegisterForm);

export default NewRegisterForm;
