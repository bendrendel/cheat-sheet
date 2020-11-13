////////////
//EXAMPLE 1
//Example of a parent class passing its state to a child component as a prop
//PARENT (would normally import child from another file)
import React from 'react';
import ReactDOM, { render } from 'react-dom';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Ben' };
    }

    render() {
        return <Child name={this.state.name} />;
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);

//CHILD (would normally be in separate file and export its component class)
import React from 'react';

class Child extends React.Component {
    render() {
        return <div>Hi, my name is {this.props.name}</div>
    }
}

////////////
//EXAMPLE 2
//Example of parent class passing a state-changing method to a child component as a prop that the child component then uses as an event handler 
//PARENT (again parent/child would normally be in separate files with appropriate import/export statements)
import React from 'react';
import ReactDOM from 'reactDOM';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { clickCount: 0 };
    }

    handleClick() {
        this.setState({ clickCount: this.state.clickCount + 1 });
    }
    
    render() {
        return <Child onClick={this.handleClick} />
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);

//CHILD
import React from 'react';

class Child extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Click Me!
            </button>
        )
    }
}

////////////
//EXAMPLE 3
//More complicated version of example 2
//PARENT
import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Ben' };
        this.changeName = this.changeName.bind(this);
    }

    changeName(newName) {
        this.setState({ name: newName });
    }

    render() {
        return <Child name={this.state.name} onChange={this.changeName} />;
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);

//CHILD
import React from 'react';

class Child extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }

    render () {
        return (
            <div>
                <select id="names" onChange={this.handleChange}>
                    <option value="Ben">Ben</option>
                    <option value="Jesse">Jesse</option>
                    <option value="Dylan">Dylan</option>
                </select>
                <p>Hi, my name is {this.props.name}</p>
            </div>            
        );
    }
}

////////////
//EXAMPLE 4
//An improved version of Example 3, where one child class updates the parent's state, and a different child class displays it
//PARENT (as usual normally would be in its own file and import the Child and Sibling components)
import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Ben' };
        this.changeName = this.changeName.bind(this);
    }

    changeName(newName) {
        this.setState({ name: newName });
    }

    render() {
        return (
            <div>
                <Child onChange={this.changeName} />
                <Sibling name={this.state.name} />
            </div>
        );
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);

//CHILD (again normally in its own file with appropriate export statement)
import React from 'react';

class Child extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }

    render () {
        return (
            <div>
                <select id="names" onChange={this.handleChange}>
                    <option value="Ben">Ben</option>
                    <option value="Jesse">Jesse</option>
                    <option value="Dylan">Dylan</option>
                </select>
            </div>            
        );
    }
}

//SIBLING (also normally in its own file with appropriate export statement)
import React from 'react';

class Sibling extends React.Component {
    render() {
        return <p>Hi, my name is {this.props.name}</p>;
    }
}
