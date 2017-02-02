import React, { Component } from 'react';
import { Link } from 'react-router';

class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let fixStyle = {color: "#59E0B3"}

        return (
            <div className="full-height-slide background--primary text-align--center">
                <div className="v-align">
                    <div className="grid">
                        <div className="grid__cell phone-up-1of2 phablet-up-1of3 tab-up-1of4 desk-1of8 global-center">
                            <img className="global-1of1 margin-bottom" src="./assets/img/border-white.png" alt="logo"/>
                        </div>
                        <hgroup className="margin-bottom--big color--info">
                            <h1 className="margin-bottom--tiny">Abimis</h1>
                            <h5>Now you're coding with power</h5>
                        </hgroup>
                    </div>
                    <div className="padding-all">
                        <div className="grid">
                            <div className="grid__cell phone-up-1of1 tab-1of3 push--tab-1of6 lap-up-1of3 push--lap-1of6 desk-1of8 push--desk-3of8">
                                <Link to={'/docs/introduction'} className="global-1of1 button button--big button--info button--round margin-bottom" style={fixStyle }>Get started</Link>
                            </div>
                            <div className="grid__cell phone-up-1of1 tab-1of3 lap-1of3 desk-1of8">
                                <a href="https://aterrae.com" className="global-1of1 button button--big button--hollow button--info button--round">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;
