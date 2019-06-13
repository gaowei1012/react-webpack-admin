import React from 'react';
import Draggable from 'react-draggable';

class Drags extends React.Component {

  hanleStart = () => {

  }

  handleDrag = () => {

  }

  handleStop = () => {

  }

  render() {
    return (
      <div>
        <Draggable
          axis='x'
          handle='.handle'
          defaultPosition={{x: 0, y:0}}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.hanleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}>
            <div>
              <div className="handle" style={{width: '200px', height: '200px', border: '1px solid #ccc', background: '#ccc'}}>Drag from here</div>
              {/* <div style={{width: '200px', height: '200px', border: '1px solid #ccc', background: 'red'}}>This readme is really dragging on...</div> */}
            </div>
          </Draggable>
      </div>
    )
  }
}

export default Drags;
