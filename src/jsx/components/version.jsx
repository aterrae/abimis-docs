import React, { Component } from 'react';
import { Link } from 'react-router';

import 'whatwg-fetch';

const API_ENDPOINT = 'https://api.github.com/repos/aterrae/abimis/releases';

export default class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            version: ""
        }

        this.loadGithubRepoStars = this.loadGithubRepoStars.bind(this);
    }

    loadGithubRepoStars() {
        fetch(API_ENDPOINT)
            .then((response) => {
                response.json().then((data) => {
                    this.setState({
                        version: data[0].tag_name
                    });
                })
            })
    }

    render() {
        this.loadGithubRepoStars();
        return (
            <span>Version {this.state.version}</span>
        )
    }
}
