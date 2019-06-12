import React from 'react';
import { Row, Col } from 'antd';
import BasicChart from './BasicChart';
// import StockChart from './StockChart';


class Echarts extends React.Component {

  render() {
    return(
      <div>
        <Row style={{marginTop: '30px'}}>
          <Col span={12}>
            <BasicChart />
            {/* <StockChart /> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Echarts;
