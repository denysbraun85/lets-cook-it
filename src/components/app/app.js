import React from 'react';
import Menu from "../menu";
import OptionsMenu from "../options-menu";

import Background from './kitchen_bg.jpg';
import './app.sass';

const App = () => {
    return (
        <div className="app" style={{background: `url(${Background}) center no-repeat`}}>
            <Menu/>
            <OptionsMenu/>
        </div>
    )
};

export default App;