import React from 'react';
import { Link } from "react-router-dom";


const Menu = ({menu}) => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={menu.link}>{menu.title}</Link>
        </li>
    );
};

export default Menu;