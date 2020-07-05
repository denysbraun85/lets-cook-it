import React from "react";
import ToggleButton from "../toggle-button";
import MenuList from "../menu-list";

import './menu.sass'

const Menu = ({toggleButton, onToggleMenu}) => {

    return (
        <div className="navigation-menubar">
            <ToggleButton
                toggleButton={toggleButton}
                onToggleMenu={onToggleMenu}
            />
            <MenuList
                toggleButton={toggleButton}
                onToggleMenu={onToggleMenu}
            />
        </div>
    )

};

export default Menu;