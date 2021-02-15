//Example use of fs core module
console.log('\nExample of fs.readfile()')

const fs = require('fs');

const file = './nodejsbasics.txt';

const readCallback = (err, data) => {
    if (err) {
        console.log('readFile had an error: ' + err.message);
    } else {
        console.log('Here is the data from the file: \n' + data);
    }
}

fs.readFile(file, 'utf-8', readCallback);