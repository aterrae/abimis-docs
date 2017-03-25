import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Version extends Component {
    constructor(props) {
        super(props);

        this.state = {
            version: ""
        }

        this.loadGithubRepoVersion('https://api.github.com/repos/aterrae/abimis/releases');
    }

    loadGithubRepoVersion(endpoint) {
        fetch(endpoint)
            .then((response) => {
                response.json().then((data) => {
                    this.setState({
                        version: data[0].tag_name
                    });
                });
            });
    }

    render() {
        return (
            <span>Version {this.state.version}</span>
        )
    }
}

export default Version;
