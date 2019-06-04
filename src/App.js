'use strict'

import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './app.less';

const App = (props) => {

    const [ count, setCount ] = useState(0);

    useEffect(() => {
        document.title = `this is ${count} times`;
        console.log('useEffect a log');
    })

    return(
        <div className='app_h'>
            <p>this is app {count}</p>
            <button onClick={() => setCount(count +1)}>
                add click me

            </button>
            {/* <Button onClick={() => setCount(count +1)}>
                add click me
            </Button> */}
        </div>
    );
}

export default App;