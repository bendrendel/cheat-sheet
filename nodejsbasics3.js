//example of writing to a file one line at a time, through a writable stream
const fs = require('fs');

const fileStream = fs.createWriteStream('nodejsbasicsoutput.txt');

fileStream.write('This is line one\n');
fileStream.write('This is line two\n');
fileStream.write('This is neither line one or two\n');
fileStream.end();

//example of reading a file line by line through a readable stream
console.log('\nExample of reading a file line by line')
const readline = require('readline');

const myInterface = readline.createInterface({
    input: fs.createReadStream('./nodejsbasics.txt')
});

myInterface.on('line', (line) => {
    console.log('The line is: ' + line);
});

console.log('This line prints before the file lines because readline is being processed asyncronously adding events to the task queue');

//use this to read lines from one file, transform them and write them to another file.