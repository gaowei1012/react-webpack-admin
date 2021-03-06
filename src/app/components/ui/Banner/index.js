import React from 'react';
import Basic from './Basic';
import AutoPlay from './AutoPlay';
import Gradient from './Gradient';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../../BreadcrumbCustom';

class Banner extends React.Component {
  render() {
    return (
      <div>
        <BreadcrumbCustom first='UI' second='轮播'/>
        <Row style={{marginTop: '20px'}}>
          <Col span={12}>
            <Card title='基本用法'>
              <Basic />
            </Card>
          </Col>
          <Col span={12}>
            <Card title='自由轮播' style={{marginLeft: '10px'}}>
              <AutoPlay />
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop: '20px'}}>
          <Col span={12}>
            <Card title='渐显'>
              <Gradient />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Banner;
