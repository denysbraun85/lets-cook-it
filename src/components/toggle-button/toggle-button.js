import React from "react";
import './toggle-button.sass'

const ToggleButton = () => {
    return (
        <button className="toggle-button toggle-button--active" onClick={ () => {
            console.log(this);
        }}>
            <span className="toggle-button__span"/>
            <span className="toggle-button__span"/>
            <span className="toggle-button__span"/>
        </button>
    )
};

export default ToggleButton;