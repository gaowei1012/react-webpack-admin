import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import App from './app/App';

class Page extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' render={() => <Redirect to='/app/dashboard/index' push/>} />
          <Route path='/app' component={App} />
        </Switch>
      </Router>
    );
  }
}

export default Page;
