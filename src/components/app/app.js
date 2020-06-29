import React from 'react';
import Menu from "../menu";

import Background from './kitchen_bg.jpg';
import './app.sass';

const App = () => {
    return (
        <div className="app" style={{background: `url(${Background}) center no-repeat`}}>
            <Menu/>
            TEST TEXT
        </div>
    )
};

export default App;