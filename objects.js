/*
OBJECTS
*/

const myObject = {
    _internalProperty1: 'this is an internal value',
    _internalProperty2: ' another internal value',
    'key': 'value',
    keyWithoutQuotes: 'another value',
    'Key requiring quotes': 'value another',
    exampleMethod: function() {
        console.log('running the exampleMethod method.')
    },
    exampleMethodSyntax() {
        console.log('this is a shorter way to write a method in ES6+')
    },
    nestedObject: {
        'key-requiring-quotes': 'the dashes require quotes since they are special characters',
        anotherNestedObjProp: 'example value'
    },
    thisKeyword: function() {
        console.log(this.keyWithoutQuotes);
    },
    arrowFunctionThis: () => {
        console.log('Arrow functions will not bind this to the calling object');
        console.log(this.keyWithoutQuotes);
    },

    get internalProperty1() {
        return this._internalProperty1;
    },
    set internalProperty1(newValue) {
        if (typeof newValue === 'string') {
            this._internalProperty1 = newValue;
        } else {
            console.log('Must be a string');
        }
    },
    get internalvalues() {
        return this._internalProperty1 + this._internalProperty2;
    }
}

console.log('Example 1');
//example of reassigning a key value, even with an object declared with const
console.log(myObject.key);
myObject.key = 'reassigning this key value';
console.log(myObject.key);


console.log('\nExample 2');
//example of creating a new key-value pair
console.log(myObject.thisKeyDoesNotExist);
myObject.thisKeyDoesNotExist = 'creating a new key-value pair using assignment';
console.log(myObject.thisKeyDoesNotExist);


console.log('\nExample 3');
//example of accessing a key that requires bracket notation to be used since it contains spaces
console.log(myObject['Key requiring quotes']);


console.log('\nExample 4');
//example of accessing a key using a variable for the key's name, must use bracket notation
let keyName = 'keyWithoutQuotes';
console.log(myObject[keyName]);


console.log('\nExample 5');
//example of invoking a method
myObject.exampleMethod();


console.log('\nExample 6');
//example iteration through object using for...in
for (let keyName in myObject) {
    console.log(keyName);
    console.log(myObject[keyName]);
    console.log('\n');
}

console.log('\nExample 7');
//example of using the this keyword
myObject.thisKeyword();

console.log('\nExample 8');
//example of how arrow function don't bind the this keyword to the calling object
myObject.arrowFunctionThis();

console.log('\nExample 9');
//example of calling a getter method. must not use parens
console.log(myObject.internalProperty1);

console.log('\nExample 10');
//example of using a setter method, instead of parens, must use = sign
myObject.internalProperty1 = 'new string for internal Property 1';
console.log(myObject.internalProperty1);


console.log('\nExample11');
//example of a 'factory function' and property value shrothand
const objectMaker = (name, color) => {
    return {
        name: name,
        color,
        type: 'factory-made'
    }
}
console.log(objectMaker('real object', 'blue'));

console.log('\nExample12');
//example of destructured assignment
const { keyWithoutQuotes } = myObject;
console.log(keyWithoutQuotes);

