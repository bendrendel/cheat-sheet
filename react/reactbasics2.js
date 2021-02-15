//must import these libraries
import React from 'react';
import ReactDOM from 'react-dom';


//example simple component class and rendering an instance of it
class MyComponentClass extends React.Component {
    render() {
        return <h1>Hello world</h1>;
    }
}

ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('render-example-2')
);


//example component class that is multiline and accesses outside variables
const blackHole = {
    src: './black-hole.jpg',
    alt: 'Black Hole',
    width: '200px'
}

class BlackHole extends React.Component {
    render() {
        return (
            <div>
                <h1>Black Hole pic: </h1>
                <img
                    src={blackHole.src}
                    alt={blackHole.alt}
                    width={blackHole.width} />
            </div>
        )
    }
}


//example component class method besides render(), logic inside the render function
class CoinFlip extends React.Component {
    zeroOrOne() {
        const randomNum = Math.floor(Math.random() * 2);
        return randomNum;
    }

    render() {
        if (this.zeroOrOne() === 0) {
            return <h2>It's heads!</h2>
        } else {
            return <h2>It's tails!</h2>
        }
    }
}

//example component class method used as event handler in the rendered html
class Button extends React.Component {
    alertUser() {
        alert('You have clicked the button');
    }

    render() {
        return <div onClick={this.alertUser}>Click Me</div>;
    }
}