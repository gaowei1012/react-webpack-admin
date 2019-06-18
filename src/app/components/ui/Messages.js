import React from 'react';
import { Row, Col, Card, message, Button } from 'antd';
import BreadcrumbCustom from './../BreadcrumbCustom';

class Messages extends React.Component {

  BasicMessage = () => {
    message.info('info');
  }

  DefaultMessage = () => {
    message.error('error')
  }

  DashedMessage = () => {
    message.warning('warning')
  }

  SuccessMessage = () => {
    message.success('success')
  }

  handleDemonstration = () => {
    const hide = message.loading('loading...', 0)
    // 延时2500s
    setTimeout(hide, 2500)
  }


  render() {
    return(
      <div>
        <BreadcrumbCustom first='UI' second='全局消息'/>
        <Row style={{marginTop: '30px'}}>
          <Col span={12} >
            <Card title='基础用法'>
              <Button type='default' onClick={this.BasicMessage}>
                Info
              </Button>
              <Button type='default' onClick={this.DefaultMessage}>
                Error
              </Button>
              <Button type='default' onClick={this.DashedMessage}>
                Warning
              </Button>
              <Button type='default' onClick={this.SuccessMessage}>
                Success
              </Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='演示操作' style={{marginLeft: '10px'}}>
              <Button type='default' onClick={this.handleDemonstration}>
                演示演示
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Messages;
