import React from 'react';
import { notification, Card, Row, Col, Button, Icon } from 'antd';
import BreadcrumbCustom from './../BreadcrumbCustom';

class Notifications extends React.Component {

  state = {}

  openNotification = () => {
    notification.open({
      message: 'this is notifications ttle',
      description: 'this is notifications content',
      onClick: () => {
        console.log('this is notofications')
      }
    })
  }

  Info = () => {
    notification.info({
      message: '信息',
      description: 'this is info notifications',
      onClose: () => {
        
      }
    })
  }

  Success = () => {
    notification.success({
      message: '成功',
      description: 'this is success notifications'
    })
  }

  Warning = () => {
    notification.warning({
      message: '警告⚠️',
      description: 'this is warning notifications'
    })
  }

  Error = () => {
    notification.error({
      message: '失败',
      description: 'this is error notifications'
    })
  }

  diyNotification = () => {
    notification.open({
      message: '成功',
      description: '我是自定义图标的通知',
      icon: <Icon type='smile' style={{color: '#108ee9'}} />,
      placement: "topLeft",
      duration: 3,
      onClick: () => {
        console.log('ok')
      }
    })
  }


  render() {
    return(
      <div>
        <BreadcrumbCustom first='UI' second='通知提醒' />
        <Row style={{marginTop: '30px'}}>
          <Col span={12}>
            <Card title='基础用法'>
              <Button type='default' onClick={this.openNotification}>Open Notification</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='带有图标' style={{marginLeft: '10px'}}>
              <Button type='default' onClick={this.Info}>Info</Button>
              <Button type='default' onClick={this.Success}>Success</Button>
              <Button type='default' onClick={this.Warning}>Warning</Button>
              <Button type='default' onClick={this.Error}>Error</Button>
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop: '30px'}}>
          <Col span={12}>
            <Card title='自定义把图标'>
              <Button type='default' onClick={this.diyNotification}>
                自定义图标
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Notifications;
