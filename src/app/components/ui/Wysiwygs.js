/**
 * 富文本这里采用braft-editor这款，很棒
 * GitHub: https://github.com/margox/braft-editor
 */

import React from 'react';
import { Row, Col } from 'antd';
import BraftEditor from 'braft-editor';
import BreadcrumbCustom from './../BreadcrumbCustom';
import 'braft-editor/dist/index.css'; // css样式文件


class Wysiwygs extends React.Component {

  state = {
    efitorState: BraftEditor.createEditorState(null)
  }

  handelChange = (efitorState) => {
    this.setState({
      efitorState
    })
  }

  render() {
    const { efitorState } = this.state;
    return(
      <div>
        <BreadcrumbCustom first='UI' second='富文本'/>
        <Row style={{marginTop: '20px'}}>
          <BraftEditor value={efitorState} onChange={this.handelChange}></BraftEditor>
        </Row>
      </div>
    )
  }
}

export default Wysiwygs;
