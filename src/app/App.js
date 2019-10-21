import React, { Component } from 'react';
import Routes from './routes';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { ThemePicker } from './components/widget';
import { connectAlita } from 'redux-alita';
import { connect } from 'react-redux';
import { Layout } from 'antd';

// import { postRequest } from './api/request'

const { Content, Footer } = Layout;

// const propTypes = {
//     // TODO
//     userNmae: PropTypes.object.isRequired
// }

class App extends Component {

    static propTypes = {
        userName: PropTypes.string.isRequired,
        collapsed: PropTypes.bool.isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            collapsed: false,
            title: '',
            user: {
                userName: '执念'
            }
       }
    }

    componentWillMount() {
        const { setAlitaState } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        user && setAlitaState({ stateName: 'auth', data: user });
        this.getClientWidth();
        window.onresize = () => {
            ///console.log('屏幕变化了');
            this.getClientWidth();
        }
    }
    getClientWidth = () => { // 获取当前浏览器宽度并设置responsive管理响应式
        const { setAlitaState } = this.props;
        const clientWidth = window.innerWidth;
        console.log(clientWidth);
        setAlitaState({ stateName: 'responsive', data: { isMobile: clientWidth <= 992 } });
        // receiveData({isMobile: clientWidth <= 992}, 'responsive');
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        const { title } = this.state;
        const { auth = { data: {} }, responsive = { data: {} } } = this.props;
        console.log(auth);
        return (
            <DocumentTitle title={title}>
                <Layout>
                    {!responsive.data.isMobile && <SiderCustom collapsed={this.state.collapsed} />}
                    <ThemePicker />
                    <Layout style={{flexDirection: 'column'}}>
                        <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}} />
                        <Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
                            <Routes auth={auth} />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                        中后端解决方案 ©{new Date().getFullYear()} Created by 执念
                        </Footer>
                    </Layout>
                </Layout>
            </DocumentTitle>
        );
    }
}

// const mapStateToProps = state => ({
//     userNmae: state.app.userName
// })

// App.proptType = propTypes

// export default connect(mapStateToProps)(App)

export default connectAlita(['auth', 'responsive'])(App);
