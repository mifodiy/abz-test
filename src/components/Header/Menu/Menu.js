import React from 'react';
import Logo from "../../../assets/Logo.svg";
import classNames from "classnames";
import Scrollspy from 'react-scrollspy'


const Menu = ({items, isMenuOpen}) => {
    const menuClass = classNames('menu', {'is-open': isMenuOpen});
    return (
        <div>
            <nav className="menu__nav">
                <Scrollspy
                    items={items.map(item => (item.url))}
                    offset={-60}
                    currentClassName="is-active"
                    className="menu__list"
                >
                    {items.map((item) => (
                        <li key={`menu-item-${item.url}`} className="menu__item">
                            <a href={`#${item.url}`} className="menu__link">
                                {item.text}
                            </a>
                        </li>
                    ))}
                </Scrollspy>
            </nav>
        </div>
    );
};

export default Menu;
