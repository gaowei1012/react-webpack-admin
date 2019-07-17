import React from 'react';
import TwwenOne from 'rc-tween-one';
import BreadcrumbCustom from '../../BreadcrumbCustom'

class BasicAnimations extends React.Component {
  render(){
    return(
      <div>
        <BreadcrumbCustom first='动画' second='基础动画' />
        <div style={{padding: '12px'}}>
          基础动画内容
        </div>
      </div>
    )
  }
}

export default BasicAnimations;
