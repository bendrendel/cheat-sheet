/*
FUNCTIONS
*/

//function declaration
function myFunction(parameterOne, parameterTwo) {
    console.log('1. Message from myFunction, ' + parameterOne + ', and here is another param ' + parameterTwo)
};

//function call
myFunction('myFirstArgument', 5);

//default param value
function functionWithDefault(myParameter = "a default value") {
    console.log('Your parameter value is: ' + myParameter);
}

functionWithDefault('my own value, not the default');
functionWithDefault();

//function expression
const functionIdentifier = function(myParam) {
    console.log(myParam);
};

//arrow function
const arrowFunctionIdentifier = (myFirstParam, mySecondParam) => {
    console.log(myFirstParam);
    console.log(mySecondParam);
}

//concise body examples
//single param arrow function can omit parentheses
const arrowFunctionOneArg = myOnlyArg => {
    console.log(myOnlyArg);
}

//function bodies that consist of only a single line return statement can omit the curly brackets and return keyword
const superConciseFunction = number => number * number;

//however, returning an object literal requires parentheses around the object
const superConciseObjectFunction = someArg => ({ prop1: mypropValue, prop2: myOtherVal })

//pass functions between variables
const newFunctionName = superConciseFunction;
console.log('The square of 4 is: ' + newFunctionName(4));

//passing a callback function to a higher order function
const executionTime = (functionToTest) => {
    let startTime = Date.now();
    functionToTest();
    let endTime = Date.now();
    return endTime - startTime;
}

const longRunningFunction = () => {
    let i = 1;
    while (i < 10000000) {
        i++;
    }
}

console.log('Execution time is: ' + executionTime(longRunningFunction) + ' milliseconds');