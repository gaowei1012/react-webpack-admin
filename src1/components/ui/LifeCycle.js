import React from 'react';

export default class LifeCycle extends React.Component {
  constructor() {
    super()
    console.log('construtor')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  static getDerivedStateFromProps(nextProps, preState) {
    if (nextProps !== preState) {
      /// TODO
    }
    console.log('getDerivedStateFromProps')
  }


  shouldComponentUpdate(nextProps, nextState) {
    /// TODO
    console.log('shouldComponentUpdate')
  }

  getSnapshotBeforeUpdate() {
    console.log('getSanapshotBeforeUpdate')
  }

  componentWillUnmount() {
    console.log('组件卸载')
  }

  render() {
    console.log('render function')
    return <div>LifeCycle</div>
  }
}
