import React from 'react';
import { Map } from 'react-amap';
import { Row } from 'antd';
import BreadcrumbCustom from './../../BreadcrumbCustom';

/**
 * 更详细Map使用请参照 https://elemefe.github.io/react-amap/
 */

class EMap extends React.Component {

  amapkey = '286bd5740b8e4a81b066e04f7d75949e'

  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <BreadcrumbCustom first='UI' second='地图' />
        <Row style={{marginTop: '20px'}}>
          <Map amapkey={this.amapkey}  />
        </Row>
      </div>
    )
  }
}

export default EMap;