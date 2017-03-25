import React, { Component } from 'react';
import Marked from 'marked';

import Nav from '../components/Topnav';
import Sidenav from '../components/Sidenav';

class Docs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: null,
            content: null
        }

        this.renderMD(this.props.match.params.md);
    }

    componentWillReceiveProps(nextProps) {
        this.renderMD(nextProps.match.params.md);
    }

    renderMD(currentPath) {
        var renderer = new Marked.Renderer({langPrefix: 'lang-'});
        var base = new Marked.Renderer({langPrefix: 'lang-'});

        renderer.code = (code, lang, escaped) => lang == 'test' ? this.example(code) : base.code(code, lang, escaped) + '</div>';

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
    }

    render() {
        return (
            <div>
                <Nav/>
                <Sidenav page={this.state.page}/>
                <div className="grid__cell phone-up-1of1 lap-up-3of4 push--lap-up-1of4 desk-3of5 push--desk-1of5">
                    <div dangerouslySetInnerHTML={{ __html: this.state.content }} className="body"/>
                </div>
            </div>
        )
    }
}

export default Docs;
