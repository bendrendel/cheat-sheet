//run this file in node to see functionality (not supported in browser)

//Example of process object value
console.log('Example of process.env.pwd:')
console.log(process.env.PWD);


//Example of event emitter
console.log('\nExample of Event Listener:');

let events = require('events')

let myEmitter = new events.EventEmitter();

let callbackFunction = (data) => {
    console.log('Here is the event data: ' + data);
}

myEmitter.on('special event', callbackFunction);

myEmitter.emit('special event', 'special event data');


//Example of error-first callback function
console.log('\nExample of error-first callback function')

function fakeAPI(errFirstCallback) {
    const randomNumber = Math.random();
    let err;
    if (randomNumber < 0.5) {
        err = new Error('There was an error');
        errFirstCallback(err);
    } else {
        let data = 'here is your data';
        errFirstCallback(err, data);
    }
}

const errFirstCallback = (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(data);
    }
}

fakeAPI(errFirstCallback);


//Example of getting user input from the terminal, and using process.stdout.write instead of console.log
console.log('\nExample of getting user input ');

process.stdout.write('Please enter some input: ');

process.stdin.on('data', (userInput) => {
    let input = userInput.toString();
    process.stdout.write('Thanks for entering ' + userInput);
    process.exit();
    console.log('this will never print after the exit method is called');
});