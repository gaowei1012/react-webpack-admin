import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import history from '../../app/utils/history'
import './index.less'

const { Header, Sider, Content } = Layout;

class BaseLayout extends Component {

  constructor(props) {
    super(props)
    this.collapsed = false;
    this.newTabIndex = 0;
    const panes = [];
    const menuPanes = [
      { title: 'title', }
    ]


  }

  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {

    const { collapsed } = this.state

    return (
      <div className='ly_base_wrap'>
        <Layout>
          <Sider trigger={null} collapsed={collapsed} collapsible>
            <div className='ly_logo'>
              LOGO
            </div>
            <div>
              <Menu theme='dark' mode='vertical-left' defaultSelectedKeys={['1']}>
                <Menu.Item key='1'>
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                  <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key='2'>
                  <Icon type='mail' style={{ color: 'rgba(0,0,0,.25)' }} />
                  <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key='3'>
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                  <span>nav 3</span>
                </Menu.Item>
              </Menu>
            </div>
          </Sider>
          <Layout>
            <Header style={{ backgroundColor: '#fff', padding: '0' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 20,
                background: '#fff',
                minHeight: 480,
              }}
            >
              Context
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default BaseLayout
