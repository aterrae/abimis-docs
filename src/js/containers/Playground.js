import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../components/Topnav';
import Sidenav from '../components/Sidenav';

import PlaygroundNav from '../components/Playground.Nav';

import Navbar from '../components/demos/Navbar';
import GridVisibility from '../components/demos/GridVisibility';

class Playground extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const MenuItem = ({component, icon, title, description}) => {
            return (
                <Link to={"/playground/" + component}>
                    <li>
                        <figure>
                            <i className={"fa fa-" + icon}/>
                        </figure>
                        <div>
                            <h5>{title}</h5>
                            <span>{description}</span>
                        </div>
                    </li>
                </Link>
            )
        }

        const Menu = () => {
            const COMPONENTS = [
                {
                    link: "navbar",
                    title: "Navbar",
                    icon: "ship",
                    desc: "A seamless component to give your user a fixed place to go to when seeking an easy and intuitive way to move around"
                },
                {
                    link: "grid-visibility",
                    title: "Grid Visibility",
                    icon: "ship",
                    desc: "A set of classes to manage the visibility of items in a set of grids"
                },
            ]

            return (
                <ul className="icon-list grid-list grid-list--S-2 grid-list--M-2 grid-list--L-3 grid-list--limited">
                    {COMPONENTS.map((component, index) => <MenuItem key={"menu-item-" + index}
                                                                    component={component.link}
                                                                    title={component.title}
                                                                    icon={component.icon}
                                                                    description={component.desc}/>)}
                </ul>
            )
        }

        const renderComponent = (component) => {
            switch (component) {
                case "navbar":  return <Navbar/>
                case "grid-visibility":  return <GridVisibility/>
                default:        return null;
            }
        }

        return (
            <div>
                <Nav/>
                <PlaygroundNav currentPath={this.props.match.params.component}/>
                <div className="grid grid--constrained">
                    <div className="playground">
                        <h2>{this.props.match.params.component}</h2>
                        {this.props.match.params.component ? renderComponent(this.props.match.params.component) : <Menu/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default Playground;
