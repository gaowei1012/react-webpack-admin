import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import AppContainer from './../containers/AppContainer'
import Login from './../../modules/login/login'
import Register from '../../modules/register/register'

class MyRouter extends React.PureComponent {
  render() {
    return (
      <Router>
        <Route path='/' component={AppContainer} exact />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Router>
    )
  }
}

export default MyRouter