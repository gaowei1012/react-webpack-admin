import React, { Component } from 'react'
import {
  Button
} from 'antd'

export default class AppContainer extends Component {

  handleClick = () => {
    console.log('click me')
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} type='primary'>Click me</Button>
      </div>
    )
  }
}