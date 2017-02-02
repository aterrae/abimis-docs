import React from 'react';
import { Link } from 'react-router';

import { topics } from '../../data/strings.json';

const Nav = ({ page }) => {

    var renderSections = function() {
        return topics.map((topic, topicIndex) => {
            return (
                <ul key={"list-" + topicIndex} className="sidenav__list">
                    <li className="sidenav__title">{topic.title}</li>
                    {
                        topic.items.map((item, itemIndex) => {
                            return <li key={"item-" + topicIndex + "-" + itemIndex} className={page == item.page ? "sidenav__item--active" : null}><Link to={"/docs/" + item.page}>{ item.name }</Link></li>
                        })
                    }
                </ul>
            )
        })
    }

    return (
        <aside className="grid__cell phone-up-1of1 lap-up-1of4 desk-1of5 sidenav__container">
            <div className="sidenav">
                <h3>Contents</h3>
                { renderSections() }
            </div>
        </aside>
    )
}

export default Nav;
