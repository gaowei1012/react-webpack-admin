import React from 'react';
import { Spin, Col, Row, Card, Alert } from 'antd';
import BreadcrumbCustom from './../BreadcrumbCustom';

class Spins extends React.Component {
  render() {
    return(
      <div>
        <BreadcrumbCustom first='UI' second='加载中' />
        <Row style={{marginTop: '20px'}}>
          <Col span={10}>
            <Card title='基本用法'>
              <Spin />
            </Card>
          </Col>
          <Col span={10} style={{marginLeft: '20px'}}>
            <Card title='自定义文案'>
            <Spin tip="Loading...">
              <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
              />
              </Spin>
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop: '30px'}}>
          <Col span={10}>
            <Card title='自定义指示符'>
              <Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Spins;
