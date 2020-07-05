import React from "react";
import './toggle-button.sass'

const ToggleButton = (props) => {

    const {toggleButton, onToggleMenu} = props;

    return (
        <button className={toggleButton ? `toggle-button toggle-button--active` : `toggle-button`} onClick={onToggleMenu}>
            <span className="toggle-button__span"/>
            <span className="toggle-button__span"/>
            <span className="toggle-button__span"/>
        </button>
    )

};

export default ToggleButton;
