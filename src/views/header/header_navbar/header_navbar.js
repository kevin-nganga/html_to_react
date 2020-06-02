import React from 'react';

export default function Header_navbar() {
    return (
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1"><a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                    href="#portfolio">Portfolio</a></li>
                <li className="nav-item mx-0 mx-lg-1"><a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1"><a
                    className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}
