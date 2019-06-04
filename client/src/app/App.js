import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    console.log(`客户端组件开始渲染`)
  }

  render() {
    return (
      <div>this is app page</div>
    )
  }
}