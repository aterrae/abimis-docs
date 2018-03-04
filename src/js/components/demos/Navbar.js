import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <nav className="navbar margin-bottom--huge">
                    <div className="navbar__logo">
                        <a>
                            <figure>
                                <img src="https://placehold.it/128" alt="logo"/>
                                <figcaption>Site name</figcaption>
                            </figure>
                        </a>
                    </div>
                    <div className="navbar__left">
                        <ul>
                            <a><li>Link 1</li></a>
                            <a><li>Link 2</li></a>
                            <a><li>Link 3</li></a>
                        </ul>
                    </div>
                    <div className="navbar__right">
                        <ul>
                            <a><li>Link 1</li></a>
                            <a><li>Link 2</li></a>
                            <a><li>Link 3</li></a>
                        </ul>
                    </div>
                    <div className="navbar__burger">
                        <ul>
                            <li>
                                <img src="https://placehold.it/128" alt="burger"/>
                            </li>
                        </ul>
                    </div>
                </nav>

                <nav className="navbar navbar--active">
                    <div className="navbar__logo">
                        <a>
                            <figure>
                                <img src="https://placehold.it/128" alt="logo"/>
                                <figcaption>Site name</figcaption>
                            </figure>
                        </a>
                    </div>
                    <div className="navbar__left">
                        <ul>
                            <a><li>Link 1</li></a>
                            <a><li>Link 2</li></a>
                            <a><li>Link 3</li></a>
                        </ul>
                    </div>
                    <div className="navbar__right">
                        <ul>
                            <a><li>Link 1</li></a>
                            <a><li>Link 2</li></a>
                            <a><li>Link 3</li></a>
                        </ul>
                    </div>
                    <div className="navbar__burger">
                        <ul>
                            <li>
                                <img src="https://placehold.it/128" alt="burger"/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
