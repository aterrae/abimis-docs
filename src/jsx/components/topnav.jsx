import React from 'react';
import { Link } from 'react-router';

const Nav = () => {

    return (
        <nav className="topnav docs__nav">
            <Link to="/"><img className="topnav__logo margin-left" src="../../assets/img/solid-black.png" alt="logo"/></Link>
            <h3 className="docs__nav__title">Abimis</h3>
        </nav>
    )
}

export default Nav;
