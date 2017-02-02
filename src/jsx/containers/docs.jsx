import React, { Component } from 'react';
import Marked from 'marked';

import Nav from '../components/topnav.jsx';
import Sidenav from '../components/sidenav.jsx';

class Docs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: null,
            content: null
        }
    }

    componentWillMount() {
        var renderer = new Marked.Renderer({langPrefix: 'lang-'});
        var base = new Marked.Renderer({langPrefix: 'lang-'});

        renderer.code = (code, lang, escaped) => lang == 'test' ? this.example(code) : '<div class="uk-margin-medium">' + base.code(code, lang, escaped) + '</div>';

        var currentPath = this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf("/") + 1);

        $.get('../'+ currentPath +'.md').then(content => {
            this.setState({
                page: currentPath,
                content: Marked(content, {renderer})
            });
        }, err => {
            this.setState({
                page: currentPath,
                content: "<h1>404</h1><h2>Page not found</h2>"
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        var renderer = new Marked.Renderer({langPrefix: 'lang-'});
        var base = new Marked.Renderer({langPrefix: 'lang-'});

        renderer.code = (code, lang, escaped) => lang == 'test' ? this.example(code) : base.code(code, lang, escaped) + '</div>';

        var currentPath = nextProps.location.pathname.substring(nextProps.location.pathname.lastIndexOf("/") + 1);
        $.get('../'+ currentPath +'.md').then(content => {
            this.setState({
                page: currentPath,
                content: Marked(content, {renderer})
            });
        }, err => {
            this.setState({
                page: currentPath,
                content: '<div class="missing"><h1>404</h1><h3>Page not found!</h3></div>'
            });
        });

        window.scrollTo(0,0);
    }

    example(code) {
        return (
            '<div class="test">' + code + '</div>'
        )
    };

    createMarkup() {
        return {__html: 'First &middot; Second'};
    }

    render() {
        return (
            <div>
                <Nav/>
                <Sidenav page={this.state.page}/>
                <div className="grid__cell phone-up-1of1 lap-up-3of4 push--lap-up-1of4 desk-3of5 push--desk-1of5">
                    <div dangerouslySetInnerHTML={{ __html:this.state.content }} className="body"/>
                </div>
            </div>
        )
    }
}

export default Docs;
