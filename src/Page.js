import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import App from './app/App';
import Login from './app/components/Login/Login';
import NotFound from './app/components/NotFound/NotFound';

class Page extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' render={() => <Redirect to='/app/dashboard/index' push/>} />
          <Route path='/app' component={App} />
          <Route path='/404' component={NotFound} />
          <Route path='/login' component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Page;
