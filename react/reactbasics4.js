//example of a react component module that is exported for rendering in another component module
import React from 'react';

export class NavBar extends React.Component {
    render() {
        const pages = ['home', 'blog', 'pic', 'contact'];
        const navLinks = pages.map(page => {
            return <a href={'/' + page}>{page}</a>        
        });

        return <nav>{navLinks}</nav>;
    }
}