import React from 'react';
import { Row, Col, Card } from 'antd';
import BasicChart from './BasicChart';
import DiscountedMix from './DiscountedMix';
import CakeChart from './CakeChart';
import ScatterChart from './ScatterChart';


class Echarts extends React.Component {

  render() {
    return(
      <div>
        <Row style={{marginTop: '30px'}}>
          <Col span={12}>
            <Card title='基础用法'>
              <BasicChart />
            </Card>
          </Col>
          <Col span={12}>
            <Card title='混合图表' style={{ marginLeft: '10px' }}>
              <DiscountedMix />
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop: '30px'}}>
          <Col span={12}>
            <Card title='饼图'>
              <CakeChart />
            </Card>
          </Col>
          <Col span={12}>
            <Card title='散点图' style={{marginLeft: '10px'}}>
              <ScatterChart />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Echarts;
