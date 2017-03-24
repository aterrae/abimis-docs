import React, { Component } from 'react';
import { Link } from 'react-router';

import Stars from '../components/stars';
import Version from '../components/version';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let fixStyle = {color: "#59E0B3", textTransform: 'uppercase', marginLeft: 12, marginRight: 12}
        let buttonStyle = {textTransform: 'uppercase', marginLeft: 12, marginRight: 12}

        return (
            <div className="full-height-slide background--primary text-align--center">
                <div className="v-align">
                    <div className="grid">
                        <div className="grid__cell phone-up-1of2 phablet-up-1of3 tab-up-1of4 desk-1of8 global-center">
                            <img className="global-1of1 margin-bottom" src="./assets/img/border-white.png" alt="logo"/>
                        </div>
                        <hgroup className="grid__cell color--info">
                            <h1 className="margin-bottom--tiny">Abimis</h1>
                            <h5>Now you're coding with power</h5>
                        </hgroup>
                    </div>
                    <div className="padding-all">
                        <Link to={'/docs/introduction'} className="button button--big button--info button--round margin-bottom" style={fixStyle}>Get Started</Link>
                        <a href="https://aterrae.com" className="button button--big button--hollow button--info button--round" style={buttonStyle}>About us</a>
                    </div>
                </div>

                <footer className="home__footer">
                    <Version/>
                    <Stars/>
                </footer>
            </div>
        )
    }
}

export default Index;
