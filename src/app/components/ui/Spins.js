import React from 'react';
import { Spin, Col, Row, Card, Alert, Icon } from 'antd';
import BreadcrumbCustom from './../BreadcrumbCustom';

class Spins extends React.Component {
  render() {
    return(
      <div>
        <BreadcrumbCustom first='UI' second='加载中' />
        <Row style={{marginTop: '20px'}}>
          <Col span={12}>
            <Card title='基本用法'style={{paddingBottom: '30px'}}>
              <Spin />
            </Card>
          </Col>
          <Col span={12}>
            <Card title='自定义文案' style={{marginLeft: '10px'}}>
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
          <Col span={12}>
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
