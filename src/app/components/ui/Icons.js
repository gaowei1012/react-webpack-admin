import React from 'react';
import { Icon, Row, Col } from 'antd';

class Icons extends React.Component {

  // 本案例展示Icon图标用法

  IconData = [
    'home', 'setting', 'smile', 'sync', 'smile', 'loading', 'file', 'filter', 'fire', 'folder-open', 'folder', 
    'lock', 'mail', 'heart', 'message', 'phone', 'file-zip', 'file-pdf', 'copy', 'edit', 'delete', 'diff', 
    'snippets', 'pie-chart', 'fund', 'sliders', 'html5', 'down', 'up', 'left', 'right', 'apple', 'android', 
    'windows', 'ie', 'chrome', 'github', 'aliwangwang', 'dingding', 'plus', 'info', 'check', 'stop', 'close',
    'warning', 'weibo-square', 'taobao-circle', 'weibo', 'taobao', 'wechat', 'youtube'
  ];

  render() {
    return (
      <div>
        <Row>
          <Col span={24} style={{marginTop: '20px'}}>
            {this.IconData.map((item, index) => (
              <Icon style={{padding: '10px', height: '60px', width: '60px'}} key={index} type={item} />
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Icons;
