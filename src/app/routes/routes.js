import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// base layout
import BaseLayout from '../layout/BaseLayout';
// pages
import Login from '../pages/login/index';
import Register from '../pages/register/index';
import NotFound from '../pages/notFound/index';
import AuthorizedRouter from '../routes/AuthorizedRoute';

class MyRouter extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/base" exact component={BaseLayout} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default MyRouter;
