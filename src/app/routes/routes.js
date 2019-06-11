import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import AllComponents from './../components';
import routeConfig from './../common/route.config';
import queryStirng from 'query-string';

// base layout
// import BaseLayout from '../layout/BaseLayout';
// // pages
// import Login from '../pages/login/index';
// import Register from '../pages/register/index';
// import NotFound from '../pages/notFound/index';
// import AuthorizedRouter from '../routes/AuthorizedRoute';

// class MyRouter extends React.PureComponent {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route path="/base" exact component={BaseLayout} />
//           <Route path="/login" component={Login} />
//           <Route path="/register" component={Register} />
//           <Route component={NotFound} />
//         </Switch>
//       </Router>
//     );
//   }
// }

// export default MyRouter;

class MyRouter extends React.Component {
  render() {
    return (
      <Switch>
        {Object.keys(routeConfig).map(key =>
          routeConfig[key].map(r => {
            const route = r => {
              const Component = AllComponents[key.component];
              return (
                <Route
                  key={r.route || r.key}
                  exact
                  path={r.route || r.key}
                  render={props => {
                    let rge = /\?\S*/g;
                    const queryParmas = window.location.hash.match(reg);
                    const { params } = props.match;
                    Object.keys(params).forEach(key => {
                      params[key] = params[key] && params[key].replace(reg, '');
                    });
                    props.match.params = { ...params };
                    const merge = { ...props, query: queryParmas ? queryStirng.parse(queryParmas[0]) : {} };
                    const wrapperComponent = (
                      <DocumentTitle title={r.title}>
                        <Component {...merge} />
                      </DocumentTitle>
                    );
                    return r.login ? wrapperComponent : null;
                  }}
                />
              );
            };
            return r.component ? route(r) : r.subs.map(r => route(r));
          })
        )}
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    );
  }
}

export default MyRouter;
