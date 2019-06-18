import React from 'react';
import { Button, Card, Col, Row, Icon } from 'antd';
import BreadcrumbCustom from './../BreadcrumbCustom';

const ButtonGroup = Button.Group;

class Buttons extends React.Component {
  

  render() {
    return (
      <div>
        <BreadcrumbCustom first='UI' second='按钮' />
        <Row>
          <Col span={12} >
            <Card title="基础用法12" size="small" style={{marginTop: '30px'}}>
              <Button type="danger" title='danger'>danger</Button>
              <Button type="dashed" title='dashed'>dashed</Button>
              <Button type="default" title='default'>default</Button>
              <Button type="primary" title='primary'>primary</Button>
            </Card>
          </Col>
          <Col span={12} >
            <Card title='图片按钮' size='small' style={{marginLeft: '10px', marginTop: '30px'}} >
              <Button type="primary" shape="circle" icon="search" />
              <Button type="primary" icon="search">
                Search
              </Button>
              <Button type='default' shape="circle" icon="search" />
              <Button type='default' icon="search">
                Search
              </Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Card title='加载中状态' style={{marginTop: '30px'}}>
              <Button type='primary' loading>loading</Button>
              <Button type='primary' shape='circle' loading></Button>
            </Card>
          </Col>
          <Col span={12} >
            <Card title='按钮组合' style={{marginTop: '30px', marginLeft: '10px'}}>
              <ButtonGroup>
                <Button type='primary' >
                  <Icon type='left' />
                  back
                </Button>
                <Button type='primary' >
                  next
                  <Icon type='right' />
                </Button>
              </ButtonGroup>
              <ButtonGroup style={{marginLeft: '20px'}}>
                <Button type='primary' icon='cloud'></Button>
                <Button type='primary' icon='cloud-download'></Button>
              </ButtonGroup>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Buttons;
