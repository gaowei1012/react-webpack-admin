import React from 'react';
import { Form, Button, Checkbox, Card, Row, Input } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';

class BasicForm extends React.Component {
  constructor() {
    super()
  }

  render() {
    return <div>
      <BreadcrumbCustom first='动画' second='基础动画' />
      base form
    </div>
  }
}

export default BasicForm;