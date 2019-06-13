import React from 'react';
import { Tabs, Row, Col, Card, Icon } from 'antd';
const { TabPane } = Tabs;

class MyTabs extends React.Component {

  handleTabs = (key) => {
    console.log(key)
  }

  render() {
    return(
      <div>
        <Row style={{marginTop: '30px'}}>
          <Col span={10}>
            <Card title='基本用法'>
              <Tabs defaultActiveKey="1" onChange={this.handleTabs}>
                <TabPane tab="Tab 1" key="1">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col span={10} style={{marginLeft: '30px'}}>
            <Card title='禁用某一项'>
              <Tabs defaultActiveKey="1" onChange={this.handleTabs}>
                <TabPane tab="Tab 4" key="4">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 5" disabled key="5">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 6" key="6">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop: '30px'}}>
          <Col span={10}>
            <Card title='带有图标'>
              <Tabs defaultActiveKey='1'>
                <TabPane
                  key='1'
                  tab={
                    <span>
                      <Icon
                        type='apple'
                      />
                      Tab1
                    </span>
                  }
                >
                  apple
                </TabPane>
                <TabPane
                  key='2'
                  tab={
                    <span>
                      <Icon
                        type='android'
                      />
                      tab2
                    </span>
                  }
                >
                  android
                </TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col span={10} style={{marginLeft: '30px'}}>
            <Card title='滑动'>
              <Tabs defaultActiveKey='1'>
                  <TabPane>
                    
                  </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default MyTabs;
