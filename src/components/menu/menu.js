import React from "react";
import ToggleButton from "../toggle-button";
import MenuList from "../menu-list";

import './menu.sass'

const Menu = () => {
    return (
        <div className="navigation-menubar">
           <ToggleButton/>
           <MenuList/>
        </div>
    )
};

export default Menu;