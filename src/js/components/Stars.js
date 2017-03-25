import React, { Component } from 'react';

class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: ""
        }

        this.loadGithubRepoStars('https://api.github.com/repos/aterrae/abimis/stargazers');
    }

    loadGithubRepoStars(endpoint) {
        fetch(endpoint)
            .then((response) => {
                response.json().then((data) => {
                    this.setState({
                        stars: data.length
                    });
                });
            });
    }

    render() {
        return (
            <a href="https://github.com/aterrae/abimis">
                <span><i className="fa fa-star"/> {this.state.stars} Stars</span>
            </a>
        )
    }
}

export default Stars;
