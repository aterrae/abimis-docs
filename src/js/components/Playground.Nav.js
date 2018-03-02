import React from 'react';
import { Link } from 'react-router-dom';

const PlaygroundNav = ({currentPath}) => {

    return (
        <ul className="breadcrumb margin-bottom--huge">
            <li><Link to="/playground">Playground</Link></li>
            {currentPath ? <li>{currentPath}</li> : null}
        </ul>
    )
}

export default PlaygroundNav;
