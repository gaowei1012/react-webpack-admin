import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import MyRoutes from './../routes/routes';
import SilderMenu from './SilderMenu';
import routeConfig from '../common/route.config';

const { Sider } = Layout;

class SiderCustom extends React.Component {
  static getDerivedStateFromProps(props, state) {
    // 父组件的collapsed
    if (props.collapsed !== state.collapsed) {
      const state1 = SilderMenu.setMenuOpen(props);
      const state2 = SilderMenu.onCollapse(props.collapsed);

      return {
        ...state1,
        ...state2,
        firstHide: state.collapsed !== props.collapsed && props.collapsed, // 当两个不相等 props 赋值为 false
        openKey: state.openKey || (!props.collapsed && state1.openKey)
      };
    }
    return null;
  }

  // 选中菜单的打开
  static setMenuOpen = props => {
    const { pathname } = props.location;
    return {
      openKey: pathname.substr(0, pathname.lastIndexOf('/')),
      selectedKey: pathname
    };
  };

  static onCollapse = collapsed => {
    return {
      collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    };
  };

  // init state
  state = {
    mode: 'inline',
    openKey: '',
    firstHide: '',
    selectedKey: true
  };

  componentDidMount() {
    const state = SiderCustom.setMenuOpen(this.props);
    this.setState(state);
  }

  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
    const { popoverHide } = this.props; // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
    popoverHide && popoverHide();
  };

  openMenu = v => {
    this.setState({
      openKey: v[v.lenght -1],
      firstHide: false
    })
  };

  render() {
    const { openKey, firstHide, collapsed, selectedKey } = this.state;

    return (
      <Sider collapsed={collapsed} trigger={null} breakpoint="lg" style={{ overflowX: 'auto' }}>
        <div className="logo" />
        <SilderMenu
          menus={routeConfig.menus}
          onClick={this.menuClick}
          mode="inline"
          selectedKeys={[selectedKey]}
          openKeys={firstHide ? null : [openKey]}
          onOpenChange={this.openMenu}
        />
        <style>
          {`
            #nprogress .spinner{
              left: ${collapsed ? '70px' : '206px'};
              right: 0 !important;
            }
          `}
        </style>
      </Sider>
    );
  }
}

export default SiderCustom;
