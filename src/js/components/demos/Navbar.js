import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            standardNavState: false
        }
    }

    render() {

        return (
            <div>
                <h5 className="margin-top--big">Standard Navbar</h5>
                <nav className="navbar">
                    <div className="navbar__logo">
                        <a>
                            <figure>
                                <img src="../../../assets/img/solid-black.png" alt="logo"/>
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
                                <img src="../../../assets/img/menu.svg" alt="burger"/>
                            </li>
                        </ul>
                    </div>
                </nav>

                <h5 className="margin-top--big">Wrapped Navbar</h5>
                <p>This Navbar makes sure it's contents align to the grid</p>
                <nav className="navbar">
                    <div className="navbar__wrapper">
                        <div className="navbar__logo">
                            <a>
                                <figure>
                                    <img src="../../../assets/img/solid-black.png" alt="logo"/>
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
                        <div className="navbar__dropdown">
                            <ul>
                                <a><li>Link 1</li></a>
                                <a><li>Link 2</li></a>
                                <a><li>Link 3</li></a>
                                <a><li>Link 4</li></a>
                                <a><li>Link 5</li></a>
                                <a><li>Link 6</li></a>
                            </ul>
                        </div>
                        <div className="navbar__burger">
                            <ul>
                                <li>
                                    <img src="../../../assets/img/menu.svg" alt="burger"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <h5 className="margin-top--big">Center logo Navbar</h5>
                <nav className={"navbar navbar--center"}>
                    <div className="navbar__logo">
                        <a>
                            <figure>
                                <img src="../../../assets/img/solid-black.png" alt="logo"/>
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
                    <div className="navbar__dropdown">
                        <ul>
                            <a><li>Link 1</li></a>
                            <a><li>Link 2</li></a>
                            <a><li>Link 3</li></a>
                            <a><li>Link 4</li></a>
                            <a><li>Link 5</li></a>
                            <a><li>Link 6</li></a>
                        </ul>
                    </div>
                    <div className="navbar__burger">
                        <ul>
                            <li>
                                <img src="../../../assets/img/menu.svg" alt="burger"/>
                            </li>
                        </ul>
                    </div>
                </nav>

                <h5 className="margin-top--big">Transparent Dark Navbar</h5>
                <nav className={"navbar navbar--dark navbar--transparent"}>
                    <div className="navbar__logo">
                        <a>
                            <figure>
                                <img src="../../../assets/img/solid-black.png" alt="logo"/>
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
                    <div className="navbar__dropdown">
                        <ul>
                            <a><li>Link 1</li></a>
                            <a><li>Link 2</li></a>
                            <a><li>Link 3</li></a>
                            <a><li>Link 4</li></a>
                            <a><li>Link 5</li></a>
                            <a><li>Link 6</li></a>
                        </ul>
                    </div>
                    <div className="navbar__burger">
                        <ul>
                            <li>
                                <img src="../../../assets/img/menu.svg" alt="burger"/>
                            </li>
                        </ul>
                    </div>
                </nav>

                <h5 className="margin-top--big">Working example</h5>
                <nav className={"navbar" + (this.state.standardNavState ? " navbar--active" : "")}>
                    <div className="navbar__logo">
                        <a>
                            <figure>
                                <img src="../../../assets/img/solid-black.png" alt="logo"/>
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
                    <div className="navbar__dropdown">
                        <ul>
                            <a><li>Link 1</li></a>
                            <a><li>Link 2</li></a>
                            <a><li>Link 3</li></a>
                            <a><li>Link 4</li></a>
                            <a><li>Link 5</li></a>
                            <a><li>Link 6</li></a>
                        </ul>
                    </div>
                    <div className="navbar__burger" onClick={() => {this.setState({standardNavState: !this.state.standardNavState})}}>
                        <ul>
                            <li>
                                <img src="../../../assets/img/menu.svg" alt="burger"/>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
