//example of component module that imports another component module to be rendered in its render method
import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './reactbasics4.js';

class Component extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>Welcome to my site!</h1>
                <p>Check out this great content</p>                
            </div>
        )
    }
}

ReactDOM.render(
    <Component />,
    document.getElementById('example-module')
)