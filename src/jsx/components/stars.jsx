import React, { Component } from 'react';
import 'whatwg-fetch';

const API_ENDPOINT = 'https://api.github.com/repos/aterrae/abimis/stargazers';

export default class Stars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: ""
        }

        this.loadGithubRepoStars = this.loadGithubRepoStars.bind(this);
    }

    loadGithubRepoStars() {
        fetch(API_ENDPOINT)
            .then((response) => {
                response.json().then((data) => {
                    this.setState({
                        stars: data.length
                    });
                })
            })
    }

    render() {
        this.loadGithubRepoStars();
        return (
            <a href="https://github.com/aterrae/abimis">
                <span>
                    <i className="fa fa-star"/> {this.state.stars} Stars
                </span>
            </a>
        )
    }
}
