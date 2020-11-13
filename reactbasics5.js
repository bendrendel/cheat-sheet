//
//Example of accessing props in a component's render function to display their values or use their values in logic
//
import React from 'react';
import ReactDOM from 'react-dom';

class PropDisplayer extends React.Component {
    render() {
        if (this.props.prop3) {
            return <p>{JSON.stringify(this.props)}</p>;
        } else {
            return <p>{this.props.prop1}</p>;
        }
    }
}

//
//Example of setting the defaultProps for one of the props
//
PropDisplayer.defaultProps = {
    prop1: 'default value'
}

//
//Example rendering above component with ReactDOM.render() and setting prop values as attributes
//
ReactDOM.render(
    <PropDisplayer prop1='render me' prop2={2+3} prop3={true}/>,
    document.getElementById('example-props')
);


//
//Example rendering above component in the render method of another component, setting prop values (normally would have these components in separate files)
//
class PropDisplayerDisplayer extends React.Component {
    render() {
        return (
            <div>
                <h2>Here is the PropDisplayer component: </h2>
                <PropDisplayer prop1='render me' prop2={2+3} prop3={true} />
            </div>
        )
    }
}


//
//Example of a button component class that would handle everything about the button and allow you to pass it 
//an onClick event handler, prop name is onClick same as event listener attribute name by convention
//
class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Click here!
            </button>
        );
    }
}

//
//Example of rendering the button above in another component that defines its onClick event handler, named handleClick by convention
//again components would normally be in separate files
//
class TopLevelComponent extends React.Component {
    handleClick() {
        alert('This component defines what happens when the button is clicked')
    }

    render() {
        return (
            <Button onClick={this.handleClick} />
        )
    }
}

//
//Example of accessing props.children in a component class render method
//Examples of component instances with and without innerHTML
//
class LogToConsole extends React.Component {
    render() {
        console.log(this.props.children);
        return <p>Something has been logged to the console</p>
    }
}

/*
<LogToConsole>Log Me to the console</LogToConsole>

<LogToConsole>
    <TopLevelComponent/>
</LogToConsole>

<LogToConsole/>
*/


//
//Example of using a constructor in a component class to set the state property
//and accessing the state property
//
class ClassyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { importance: 'high' };
    }

    render() {
        return <h2>The importance of this component is {this.state.importance}</h2>
    }
}

//
//Example of changing the state inside an event handler method using setState
//also shows use of injected object to set value of the style attribute in a JSX element
//
class StateChangingEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'green' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.color === 'green') {
            this.setState({ color: 'yellow' });
        } else {
            this.setState({ color: 'green' });
        }
    }

    render() {
        return (
            <div style={{backgroundColor: this.state.color}}>
                <button onClick={this.handleClick}>Change colors!</button>
            </div>
        );
    }
}