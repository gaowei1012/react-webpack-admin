import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { setLoginRedirectUrl } from './../redux/actions/loginAction';

class AuthorizedRouter extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props;
    const isLogged = sessionStorage.getItem('username') != null ? true : false;
    if (!isLogged) {
      setLoginRedirectUrl(this.props.location.pathname);
    }
    return (
      <Route
        {...rest}
        render={props => {
          return isLogged ? <Component {...props} /> : <Redirect to="/login" />;
        }}
      />
    );
  }
}

export default AuthorizedRouter;
