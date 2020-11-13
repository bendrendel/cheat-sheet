/*
ARRAYS
*/

fruitArray = ['oranges', 'bananas', 'apples', 'kiwis', 'mangoes'];

console.log('** forEach Example **');
fruitArray.forEach(function(element) {
    console.log(element);
})

console.log('** map Example **');
const upperFruitArray = fruitArray.map((elem) => {
    return elem.toUpperCase();
})
console.log(upperFruitArray);

console.log('** filter Example **');
function isLongWord(word) {
    return word.length > 6;
}
const longFruitNames = fruitArray.filter(isLongWord);
console.log(longFruitNames);

console.log('** findIndex Example **');
const startsWithA = (word) => {
    return word.toUpperCase()[0] === 'A';
}
console.log(fruitArray.findIndex(startsWithA));

console.log('** reduce Example **');
const stringOfFruit = fruitArray.reduce((accumulator, currentValue) => {
    return accumulator + ", " + currentValue;
}, 'cherries');
console.log(stringOfFruit);