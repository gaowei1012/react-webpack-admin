import React from 'react';
import { Provider } from 'react-redux';
import MyRouter from './routes/routes';
import DocumentTitle from 'react-document-title';
import { Layout, notification, Icon } from 'antd';
import store from './redux/store';

const { Content, Footer } = Layout;

class App extends React.PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  render() {

    const { title } = this.state;
    const {} = this.props;

    return (
      <DocumentTitle title={title}>
          <Layout>
            <MyRouter />
          </Layout>
      </DocumentTitle>
    )
  }
}

export default App;
