import React from 'react'
import {
  Switch,
  Router,
  Route
} from 'react-router-dom'

class MyRouter extends React.PureComponent {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component='' />
        </Switch>
      </div>
    )
  }
}

export default MyRouter