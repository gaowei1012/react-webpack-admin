import React from 'react';
import TwwenOne from 'rc-tween-one';

class BasicAnimations extends React.Component {
  render(){
    return(
      <TwwenOne
        animation={{x: 100}}
      />
    )
  }
}

export default BasicAnimations;
