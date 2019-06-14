import React from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class EmojiMart extends React.Component {
  render() {
    return (
      <div>
        <Picker style={{ position: 'absolute', top: '40px', left: '200px' }} />
      </div>
    )
  }
}

export default EmojiMart;
