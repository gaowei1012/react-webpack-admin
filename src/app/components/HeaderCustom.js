import React from 'react';
import screenfull from 'screenfull';
import SilderCustom from './SiderCustom';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import { withRouter } from 'react-router-dom';
import { connectAlita } from 'redux-alita';
// import { queryString } from './../../utils'
// import {} from './../api/request';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends React.Component {
  state = {
    user: '',
    visible: false
  };

  // componentDidMount() {
  //   const QueryString = queryString();
  //   const _user = JSON.parse(localStorage.getItem('user')) || 'test';
  //   if (!user && QueryString.hasOwnProperty('coode')) {
  //     // TODO
  //   }
  // }

  popoverHide = () => {
    this.setState({
      visible: false , // 改变visible 状态
    })
  }

  handleVisibelChange = visible => {
    this.setState({
      visible
    })
  };

  menuClick = e => {
    e.key === 'logout' && this.logout();
  };

  logout = () => {
    localStorage.removeItem('user')
    this.props.history.push('/login')
  }

  screenFull = () => {
    if (screenfull.enabled) screenfull.request();
  };

  render() {
    const { responseive = { data: {} }, path } = this.props;
    const { visible } = this.state;
    return (
      <Header className="custom-theme header">
        {responseive.data.isMobile ? (
          <Popover
            content={
              <SilderCustom
                path={path}
                popoverHide={this.popoverHide}
                trigger="clicc
            k"
                placement="bottomLeft"
                visible={visible}
              />
            }
            onVisibleChange={this.handleVisibelChange}
          >
            <Icon type="bars" className="haeder_trigger custom-trigger" />
          </Popover>
        ) : (
          <Icon
            className="header_trigger custom-trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.toggle}
          />
        )}
        <Menu mode="horizontal" style={{ lineHeight: '64px', float: 'right' }} onClick={this.menuClick}>
          <Menu.Item key="pwd">
            <span>this is pwd</span>
          </Menu.Item>
          <Menu.Item key="full" onClick={this.screenFull}>
            <Icon type="arrows-alt" onClick={this.screenFull} />
          </Menu.Item>
          <Menu.Item key="1">
            <Badge count={25} overflowCount={10} style={{ marginLeft: 10 }}>
              <Icon type="notification" />
            </Badge>
          </Menu.Item>
          <SubMenu
            title={
              <span className="avatar">
                <img src={avatar} alt="头像" />
                <i className="on bottom b-white" />
              </span>
            }
          >
            <Menu.ItemGroup title="用户中心">
              <Menu.Item key="setting:1">你好 - {this.props.user.useNname}</Menu.Item>
              <Menu.Item key="setting:2">个人信息</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="设置中心">
              <Menu.Item key="setting:3">个人设置</Menu.Item>
              <Menu.Item key="setting:4">系统设置</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Header>
    );
  }
}

// export default HeaderCustom;
export default withRouter(connectAlita(['responsive'])(HeaderCustom));
