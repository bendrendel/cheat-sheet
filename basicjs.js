/*
BASIC TERMS
ECMAScript: A scripting language standard that javascript follows, standards set by Ecma International
ES5: Version of javascript preceding ES6
ECMAScript2015 commonly called ES6: 6th edition of ECMAScript released in 2015, biggest update since first edition in 1997, referred to as "Modern Javascript"
designed to be backward compatible with ES5 (you can map any ES6 to equivalent ES5)
    - added let and const
    - added arrow functions
    - added classes
    - added default parameter values
    - added promises
    - much more object-oriented making it more similar to other modern programming languages
    - more readable and economical with code
    - new syntax that helps prevent common bugs in ES5
ES6+: commonly used to refer to ES6 updates and all updates since
*/

/*
BASICS
;: terminate lines with a semicolon, js usually will run correctly without it but there are instances where it is required so best to always use it
comments: single line with //, multi line or in-line with /*  * /
console: a panel that displays message like errors
data types: seven fundamental data types, first 6 are primitive data types
    number: whole or decimal
    string: any grouping of keyboard characters, can be in double or single quotes, codeacademy 'prefers' single quotes
    boolean: true or false
    null: absence of any value
    undefined: when a declared variable lacks a value
    symbol: newer feature used in more complex coding
    object: collections of data
typeof: operator that will return type of provided variable, e.g. console.log(typeof variableToCheck);
number operators: +, -, *, /, % (modulo)
string operators: 
    +: concatenation, e.g 'hello ' + 'there' = 'hello there'
    .length: number of characters, e.g. 'hi'.length = 2
    .toUpperCase(): e.g. 'hi'.toUpperCase() = 'HI'
    .startsWith('h'): e.g. 'hi'.startsWith('h') = false
    'string'[2]: treat a string like an array where each character is an element
template literals: ES6 feature tusing backticks to interpolate variables into strings, e.g. `This text will have ${variable} inserted`
built-in/global object methods: objects built into javascript with many useful methods
    console.log(item): e.g. console.log(5) or console.log('hi')
    Math.random(): returns a random number x where 0<=x<1
    Math.floor(decimal): rounds a given decimal down to the nearest whole number, use with .random(), 
                        e.g. for a random whole number 0-49, Math.floor(Math.random() * 50)
    Math.PI.toFixed(integer): returns pi to given number of decimal places
    Number.isInteger(arg): true or false depending on if arg is an integer
*/


/*
VARIABLES and ASSIGNMENT
Variable declaration: binds a value to a variable name, var myName = 'Ben'
variable names: use camelCase, cannot start with number, case sensitive (but bad practice to use multiple variables named the same except for casing), cannot be a js keyword
var: keyword that declares a new variable, don't have to initialize when declared (will be initialized with undefined)
let: ES6 alternative to var, variable allowed to be reassigned to different value, don't have to initialize when declared (will be initialized with undefined)
const: ES6 alternative to var, variable cannot be reassigned will throw type error, can still reassign individual elements in an array variable and add or remove elements to array
    must be initialized with a value when declared or else throws a syntax error
=: assignment operator, assigning value, or initializing variable in declaration
+=: for numbers, add value on right to variable, e.g. n += 2
-=: for numbers subtract value on right from variable, e.g. n -= 2
*=: for numbers, multiply variable by value on right, e.g. n *= 3
/=: for numbers, divide variable by value on right, e.g. n /= 4
++; for numbers, increment variable by 1, e.g. n++
--: for numbers, decrement variable by 1, e.g. n--
*/

/*
SCOPE
Scope: defines where in a program a variable can be accessed, whether that's anywhere or only in a specific context
Block: denoted by curly braces {}, groups some code, whether in a function, conditional statement, etc.
Global Scope/Global Variables: Variables declared outside of blocks are global variables with global scope and can be accessed anywhere in the program
Block Scope/Local Variables: Variables declared inside a block are local variables with block scope and can only be accessed by code inside the same block
Global Namespace: Global variables are added to the global namespace, which keep global variables accessible until the program ends
Scope Pollution: When there are too many variables in the global namespace, or when global variable names get reused for a local variable, bad practice
Tight Scoping: Don't use global variables whenever possible, creates more legible, understandable code, easier to maintain due to being more modular, saves memory
*/

/*
CONDITIONAL STATEMENTS
types of conditional statements:
    if statement
    if...else statement
    else if statement
    ternary operator
    switch statement
comparison operators: evaluates to true or false, <, >, <=, >=, ===, !== (not equal to)
logical operators: short circuit evaluation
    &&: and; evaluates left to right, returns first falsy value and stops evaluation, or last truthy value if all are truthy.
            when used with two expressions, think if first expression is falsy it is returned, but if it's truthy then second expression returned
            in this way use first expression as conditional statement that returns falsy if falsy, and second expression as code to return if first expression is truthy
            e.g. evaluateMe && runMe() is equivalent to if (evaluateMe) {runMe()};
    ||: or; evaluate left to right, returns first truthy value and stops evaluation, or last falsy value if all are falsy,
            e.g. possiblyNullValue || "default value" returns possiblyNullValue if truthy, but if falsy then the string "default value" is returned
    !: not
falsy: values that evaluate to false when checked as a condition listed below, all other values are truthy
    - 0
    - empty strings "", ''
    - null
    - undefined
    - NaN
*/

//if statement
// condition is provided in parentheses, {} denotes code block/block statement, executes if condition is true
if (true) {
    console.log('1. This string from the if statement will print since the condition is true.');
}

//if...else statement
if (false) {
    console.log('2. Will never run');
} else {
    console.log('3. This else block will always run')
}

//else if statement
if (false) {
    console.log('4. not gonna print');
} else if (false) {
    console.log('5. not gonna print');
} else if (true) {
    console.log('6. this gonna print');
} else {
    console.log('7.not gonna print');
}

//ternary operator, can use when your condition, and code blocks are each just single expressions
const expressionToEvaluate = true;

expressionToEvaluate ? console.log('8. Prints if expressionToEvaluate is true') : console.log('9. Prints if expressionToEvaluate is false');

//switch compares each case to the given expression in (), must include break statement with each case, may include default at end
let groceryItem = 'papaya';

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}

// example falsy value
let undefinedVar

if (undefinedVar) {
    console.log('This aint gonna print');
}