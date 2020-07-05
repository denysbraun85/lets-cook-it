import React from "react";
import './menu-list.sass'

const MenuList = (props) => {

    const {toggleButton} = props;

    return (
        <ul className={toggleButton ? "menu-list open" : "menu-list"}>
            <li className="menu-list__item">Головна</li>
            <li className="menu-list__item">База рецептів</li>
            <li className="menu-list__item">Улюблені</li>
        </ul>
    )


};

export default MenuList;