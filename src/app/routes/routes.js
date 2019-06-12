import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import AllComponents from './../components';
import routeConfig from './../common/route.config';
import queryString from 'query-string';

// export default MyRouter;

class MyRouter extends React.Component {
  requiredAuth = (permission, component) => {
    const { auth } = this.props;
    const { permissions } = auth.data;
    if (!permissions || !permissions.includes(permission)) return <Redirect to="/404" />;
    return component;
  };

  // 登录校验
  requiredLogin = (component, permission) => {
    const { auth } = this.props;
    const { permissions } = auth.data;
    if (process.env.NODE_ENV === 'production' && !permissions) {
      return <Redirect to="/login" />;
    }
    return permission ? this.requiredAuth(permission, component) : component;
  };

  render() {
    return (
      <Switch>
        {Object.keys(routeConfig).map(key =>
          routeConfig[key].map(r => {
            const route = r => {
              // 路由的所有组件树
              const Component = AllComponents[r.component];
              // console.log('Compnent'+ JSON.stringify(AllComponents))
              return (
                // 遍历路由配置文件，列出匹配
                <Route
                  key={r.route || r.key}
                  exact
                  path={r.route || r.key}
                  render={props => {
                    const reg = /\?\S*/g;
                    // 匹配?及其以后字符串
                    const queryParams = window.location.hash.match(reg);
                    // 去除?的参数
                    const { params } = props.match;
                    Object.keys(params).forEach(key => {
                      params[key] = params[key] && params[key].replace(reg, '');
                    });
                    props.match.params = { ...params };
                    const merge = { ...props, query: queryParams ? queryString.parse(queryParams[0]) : {} };
                    // 重新包装组件
                    const wrappedComponent = (
                      // 当前组件(title)字段
                      <DocumentTitle title={r.title}>
                        <Component {...merge} />
                      </DocumentTitle>
                    );
                    return r.login ? wrappedComponent : this.requiredLogin(wrappedComponent, r.auth);
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
