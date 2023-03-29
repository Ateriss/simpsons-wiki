import React from "react";
import './header.css';
import Logo from '../assets/Logo.png';

function Header (){
    return(
            <nav className="header">
                <div className="header__logo">
                    <a href="/" >
                        <img src={Logo} id="logo" />
                    </a>
                </div>
            </nav>
    )
};


export { Header };