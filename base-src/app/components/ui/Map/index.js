import React from 'react';
import { Map } from 'react-amap';
import { Row, Card } from 'antd';
import BreadcrumbCustom from './../../BreadcrumbCustom';

/**
 * 更详细Map使用请参照 https://elemefe.github.io/react-amap/
 */

class EMap extends React.Component {

  amapkey = '286bd5740b8e4a81b066e04f7d75949e'

  render() {
    return (
      <div>
        <BreadcrumbCustom first='UI' second='地图' />
        <Row>
          <Card title='高德地图'>
            <div style={{height: '500px'}}>
              <Map amapkey={this.amapkey} />
            </div>
          </Card>
        </Row>
      </div>
    )
  }
}

export default EMap;