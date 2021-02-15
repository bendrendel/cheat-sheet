import React from 'react';
import ReactDOM from 'react-dom';

//Simple JSX Element being saved to a variable
const helloWorld = <h1>Hello World</h1>;


//Rewritten without JSX using the createElement method
const helloWurld = React.createElement(
    'h1',
    null,
    'Hello, world'
);


//JSX Element with attributes, including className attribute (instead of class),
//and a self-closing tag with required forward slash
const blackHole = <img src='./black-hole.jpg' alt='black hole' className='interstellar-objects' />;


//Nested and multiline JSX Element
const nestedElement = (
    <a href='./index.html'>
        <h3>
            Go Home
        </h3>
    </a>
);


//Examples of inserting a javascript expression inside a JSX expression, in innerHTML, as an attribute, and as an event listener
const myNumber = <h4>2 plus 3 is {2 + 3}</h4>;

const myName = 'Kosmo';
const greeting = <p>Hello there, {myName}!</p>;

const sourceFile = './black-hole.jpg';
const anotherBlackHole = <img src={sourceFile} alt='black hole' />

function eventHandler() {
    alert('Great job running this event');
}
const eventElement = <div onClick={eventHandler}>Click This Div</div>


//Conditional statements with JSX, using if outside the JSX expression, using the ternary operator inside a jsx expression, and using &&
const message
if (Math.random() < 0.5) {
    message = <h5>Wow the random number is less than 0.5!</h5>
} else {
    message = <h5>Wow the random number is greater than or equal to 0.5!</h5>
}

const age = 22;
const determination = (
    <p>
        {age >= 21 ? 'You can have a drink' : 'Sorry, no drink'}
    </p>
);


const showSecret = Math.random() < 0.5;
const listWithSecret = (
    <ul>
        <li>Not a secret</li>
        {showSecret && <li>This is a secret</li>}
        <li>Not a secret</li>
    </ul>
);


//example of injecting an array into a jsx expression
const fruits = ['orange', 'banana', 'apple'];
const listItems = fruits.map((fruit) => {
    return <li>{fruit}</li>;
});
const fruitList = <ul>{listItems}</ul>;


//example of list item key attribute
const listKey = (
    <ul>
        <li key='li-01'>Item 1</li>
        <li key='li-02'>Item 2</li>
        <li key='li-03'>Item 3</li>
    </ul>
);


//Rendering simple jsx with ReactDOM.render()
ReactDOM.render(<h2>Example rendering</h2>, document.getElementById('render-example-1'));