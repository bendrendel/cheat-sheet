/*
For Loops
*/

//initialization expression starts loop & can declare iterator, 
//stopping condition stops loop when false, iteration statement alters iterator each time
console.log('Example 1: ');
for (let counter = 0; counter < 4; counter ++) {
    console.log(counter);
}

//looping in reverse
console.log('Example 2: ');
for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
}

//looping through an array, common to use i for index as iterator variable
console.log('Example 3.1: ');
const myArray = ['element0', 'element1', 'element2'];
for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === 'element2') {
        break;
    }
    console.log(myArray[i]);
}

//using for..of on an array instead of normal for loop, could do this with a string too
console.log('Example 3.2: ');
for (const myItem of myArray) {
    if (myItem === 'element1') {
        continue;
    }
    console.log(myItem);
}

/*
While Loops
*/
console.log('Example 4: ');
let counterOne = 0;
while (counterOne < 4) {
    console.log(counterOne);
    counterOne++;
}

/*
Do-While Loops
*/
console.log('Example 5: ');
let counterTwo = 0;
do {
    console.log(counterTwo);
    counterTwo++;
} while (counterTwo < 4);

/*
Break statement
*/
console.log('Example 6: ');
for (let i = 0; i < 99; i++) {
    if (i > 3) {
        break;
    }
    console.log(i);
}

/*
Nested Loops
*/
console.log('Example 7: ');
const firstArray = [6, 19, 20];
const secondArray = [19, 24, 85];
for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
        if (firstArray[i] === secondArray[j]) {
            console.log(`Both arrays contain the number ${firstArray[i]}`);
        }
    }
}