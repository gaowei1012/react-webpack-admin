import React from 'react'
import {
  Switch,
  BrowserRouter as Router,
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