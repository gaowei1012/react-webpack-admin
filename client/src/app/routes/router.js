import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import AppContainer from './../containers/AppContainer'

class MyRouter extends React.PureComponent {
  render() {
    return (
      <Router>
        <Route path='/' component={AppContainer} exact />
      </Router>
    )
  }
}

export default MyRouter