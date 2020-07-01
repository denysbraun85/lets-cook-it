import React from "react";
import './menu-list.sass'

const MenuList = () => {
    return (
        <ul className="menu-list">
            <li className="menu-list__item">Головна</li>
            <li className="menu-list__item">База рецептів</li>
            <li className="menu-list__item">Улюблені</li>
        </ul>
    )
};

export default MenuList;