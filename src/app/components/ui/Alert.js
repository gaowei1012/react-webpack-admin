import React from 'react';
import { Row, Col, Alert, Card } from 'antd';
import BreadcrumbCustom from './../BreadcrumbCustom';

class Alerts extends React.Component {

  state = {
    visible: true
  }

  onClose = () => {
    console.log('colse wrning')
  }

  render() {
    return(
      <div>
        <BreadcrumbCustom first='UI' second='警告提示'/>
        <Row style={{marginTop: '30px'}}>
          <Col span={10}>
            <Card title='基本用法'>
              <Alert
                message='成功'
                type='success'
                style={{marginBottom: '10px'}}
              />
              <Alert
                message='失败'
                type='error'
                style={{marginBottom: '10px'}}
              />
              <Alert
                message='警告⚠️'
                type='warning'
                style={{marginBottom: '10px'}}
              />
              <Alert
                message='信息'
                type='info'
              />
            </Card>
          </Col>
          <Col span={10} style={{marginLeft: '30px'}}>
            <Card title='可关闭警告⚠️提示'>
              <Alert
                message="我是警告文本我是警告文本"
                type="warning"
                closable
                onClose={this.onClose}
                style={{marginBottom: '30px'}}
              />
              <Alert
                message='我是可关闭警告⚠️提示'
                type='warning'
                closable
                onClose={this.onClose}
                description='我是警告文本提示， 我是警告文本提示'
              />
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop: '30px'}}>
          <Col span={10}>
            <Card title='带有icon图标'>
              <Alert
                message='成功'
                type='success'
                showIcon
                style={{marginBottom: '10px'}}
              />
              <Alert
                message='失败'
                type='error'
                showIcon
                style={{marginBottom: '10px'}}
              />
              <Alert
                message='警告⚠️'
                type='warning'
                showIcon
                style={{marginBottom: '10px'}}
              />
              <Alert
                message='信息'
                type='info'
                showIcon
              />
            </Card>
          </Col>
          <Col span={10} style={{marginLeft: '30px'}}>
            <Card title='顶部公告'>
              <Alert
                type='success'
                message='成功'
                banner
                closable
                style={{marginBottom: '10px'}}
              />
              <Alert
                type='error'
                message='失败'
                banner
                closable
                style={{marginBottom: '10px'}}
              />
              <Alert
                type='warning'
                message='警告⚠️'
                banner
                closable
                style={{marginBottom: '10px'}}
              />
              <Alert
                type='info'
                message='信息'
                banner
                closable
              />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Alerts;
