import React from 'react';
import { Modal, Col, Row, Card, Button } from 'antd';
import BreadcrumbCustom from './../BreadcrumbCustom';


class Modals extends React.Component {

  state = {
    visible: false,
    asyncVisible: false,
    confirmLoading: false,
    customizeVisible: false,
    loading: false,


  }

  handleOpenModal = (e) => {
    console.log(e)
    // 打开默认modal框
    this.setState({
      visible: true
    })
  }

  hanleOk = (e) => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  hanleColse = (e) => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  // async modal
  OpenAsyncModal = (e) => {
    console.log(e)
    this.setState({
      asyncVisible: true
    })
  }

  // async ok
  hanleAsyncOk = () => {
    // 异步关闭， 表单提交时校验
    this.setState({
      confirmLoading: true
    })
    setTimeout(() => {
      this.setState({
        asyncVisible: false,
        confirmLoading: false
      })
    }, 2500)
  }

  // 自定义fotter的modal
  openCustomizeModal = () => {
    this.setState({
      customizeVisible: true
    })
  }


  handleCustomizeOk = () => {
    this.setState({
      loading: true
    })

    setTimeout(() => {
      this.setState({
        customizeVisible: false,
        loading: false
      })
    }, 2500)
  }

  hanleReturn = () => {
    this.setState({
      customizeVisible: false
    })
  }

  // 信息提示
  Info = () => {
    Modal.info({
      title: 'info',
      content: (
        <div>
          <p>this is info</p>
          <p>this is info</p>
          <p>this is info</p>
          <p>this is info</p>
        </div>
      ),
      onOk() {
        // TODO
      }
    })
  }

  Warning = () => {
    Modal.warning({
      title: 'warning',
      content: (
        <div>
          <p>this is warning</p>
          <p>this is warning</p>
          <p>this is warning</p>
        </div>
      )
    })
  }

  Success = () => {
    Modal.success({
      title: 'success',
      content: (
        <div>
          <p>this is sucess</p>
          <p>this is sucess</p>
          <p>this is sucess</p>
        </div>
      )
    })
  }

  Error = () => {
    Modal.error({
      title: 'error',
      content: (
        <div>
          <p>this is error</p>
          <p>this is error</p>
          <p>this is error</p>
        </div>
      )
    })
  }

  render() {
    const { visible, confirmLoading, asyncVisible, customizeVisible, loading } = this.state;
    return(
      <div>
        <BreadcrumbCustom first='UI' second='对话框' /> 
        <Row style={{marginTop: '30px'}}>
          <Col span={12}>
            <Card title='默认用法'>
              <Button type='default' onClick={this.handleOpenModal}>
                Open Modal
              </Button>
              <Modal
                title='默认Modal框'
                visible={visible}
                onOk={this.hanleOk}
                onCancel={this.hanleColse}
              >
                <p>我是modal中的内容</p>
                <p>我是modal中的内容</p>
                <p>我是modal中的内容</p>
              </Modal>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='异步关闭' style={{marginLeft: '10px'}}>
              <Button type='default' onClick={this.OpenAsyncModal}>
                Async Modal
              </Button>
              <Modal
                title='async modal'
                visible={asyncVisible}
                onCancel={this.hanleColse}
                onOk={this.hanleAsyncOk}
                confirmLoading={confirmLoading}
              >
                <p>我是带有async异步操作的modal</p>
                <p>我是带有async异步操作的modal</p>
                <p>我是带有async异步操作的modal</p>
              </Modal>
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop: '30px'}}>
          <Col span={12}>
            <Card title='自定义modal脚本(footer)'>
              <Button type='default' onClick={this.openCustomizeModal}>
                customize Modal
              </Button>
              <Modal
                title='自定义fotter标题'
                visible={customizeVisible}
                onCancel={this.hanleReturn}
                onOk={this.handleCustomizeOk}
                footer={[
                  <Button type='default' key='back' onClick={this.hanleReturn}>
                    Return
                  </Button>,
                  <Button type='default' key='submit' loading={loading} onClick={this.handleCustomizeOk}>
                    Sunmit
                  </Button>
                ]}
              >
                <p>我是自定义footer的modal</p>
                <p>我是自定义footer的modal</p>
                <p>我是自定义footer的modal</p>
              </Modal>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='对话框' style={{marginLeft: '10px'}}>
              <Button type='default' onClick={this.Info}>
                Info
              </Button>
              <Button type='default' onClick={this.Warning}>
                Warning
              </Button>
              <Button type='default' onClick={this.Error}>
                Error
              </Button>
              <Button type='default' onClick={this.Success}>
                Success
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Modals;
