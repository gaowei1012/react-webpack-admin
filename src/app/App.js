import React from 'react';
import MyRouter from './routes/routes';
import DocumentTitle from 'react-document-title';
import { Layout, notification, Icon } from 'antd';
import { connectAlita } from 'redux-alita';

const { Content, Footer } = Layout;

class App extends React.PureComponent {
  state = {
    collapsed: false,
    title: ''
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    const { title } = this.state;
    const { auth = { data: {} }, responsive = { data: {} } } = this.props;
    console.log(auth)
    return (
      <DocumentTitle title={title}>
        <Layout>
          {!responsive.data.isMobile && <SiderCustom collapsed={this.state.collapsed} />}
          {/* <ThemePicker /> */}
          <Layout style={{ flexDirection: 'column' }}>
            <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}} />
            <Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
              <MyRouter auth={auth} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              React-Admin ©{new Date().getFullYear()} Created by 865470087@qq.com
            </Footer>
          </Layout>
        </Layout>
      </DocumentTitle>
    );
  }
}

export default connectAlita(['auth', 'responsive'])(App);
