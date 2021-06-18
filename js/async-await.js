/*
Async-Await
asynchronous actions: tasks we can wait on while moving on to other tasks, JS originally used callback functions for this, ES6 improved readability with native promises, and ES8 provides even better readability with async-await
  This allows JS to be non-blocking, i.e. time consuming operations like network requests can be done asynchronusly, so stack is clear for other things like UI experience
async...await syntax: ES8 syntactic sugar (no new functionality, just new syntax for using promises and generators), more readable way of doing promises that looks like regular synchronous, imperative code
a
sync: keyword to create functions that handle asynchronous actions, use either before function declaration, or with function expressions, always returns a promise so by itself is just a handy way to write functions that return promises
    -if nothing returned inside function, then returns promise with resolved value of undefined
    -if a non-promise value is returned inside function, then returns promise resolved to that value
    -if promise is returned inside function, then returns that promise

await: operator that can only be used inside an async function, used in front of a promise (typically a function call that returns a promise), it pauses execution of the async function until promise settles, and once settle returns the resolved value of the promise, or throws error with rejection reason if rejected
*/

//async Function Declaration
async function asyncFunctionDeclaration() {
    //function body
}

//async Function Expression
const asyncFunctionExpression = async () => {
    //function body
};

//invoke async function and call .then on it since it always returns a promise
/*
asyncFunctionDeclaration()
.then(resolvedValue => {
    console.log(resolvedValue);
});
*/

//async function with await, await returns resolved value of promise returned by promiseReturningFunction()
async function asyncWithAwait() {
    let resolvedValue = await promiseReturningFunction();
    console.log(resolvedValue);
}

/****************************************/
/****************************************/
/****************************************/

/*Open console to observe following code*/


// Native promise version:
function nativePromiseDinner() {
brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
})
}

// async/await version:
//
async function announceDinner() {
    const meal = await brainstormDinner();
    console.log(`I'm going to make ${meal} for dinner.`); 
}

announceDinner();

// async/await version with a mistake in it - forgot to use await
// brainstormDinner() returns a pending promise to const meal, instead of the resolved value of the promise like await would
// (meanwhile the code in the executor function of the Promise is running asynchronously)
// execution immediately continues to console.log, which prints a pending promise instead of the resolved value
// function announceDinnerNoAwait will then pop off the stack, and the promise will settle sometime later


async function announceDinnerNoAwait() {
    const meal = brainstormDinner();
    console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinnerNoAwait();

/* 
Notice how things appear in the console for announceDinner(), announceDinnerNoAwait(), and the alert() below.
announceDinner() is called first and it call brainstormDinner(), the await pauses announceDinner() only,
    and it will add the rest of announceDinner() to the task queue once brainstormDinner()'s returned promise is settled
announceDinner() can is done at this point and popped off the stack
announceDinnerNoAwait now goes on the stack and runs brainstormDinner, then immediately console.log, then its off the stack
now the alert below will run and it will block the stack until you click ok
meanwhile, the pending promise from announceDinner sends its first callback to the task queue, which wants to console.log
but it can't run until you close the alert, allow any remaining code in the file to run so the stack is cleared
*/

alert('This is blocking the stack and preventing announceDinner() from continuing');


/*
this is the brainstormDinner function. It's a little silly. It returns a promise 
that uses a series of setTimeout() functions to simulate a time-consuming 
asynchronous action. It's a good example of "callback hell" or "the pyramid of 
doom," two ways people describe how confusing a bunch of nested callback 
functions can become.
*/

function brainstormDinner() {
    return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`)
    setTimeout(() => {
      console.log('Should I make salad...?')
      setTimeout(() => {
        console.log('Should I make ramen...?')
        setTimeout(() => {
          console.log('Should I make eggs...?')
          setTimeout(() => {
            console.log('Should I make chicken...?')
            resolve('beans')
          }, 1000)
        }, 1000)
      }, 1000)
    }, 1000)
  })
}

/****************************************/
/****************************************/
/****************************************/

//Equivalent formulations using first promise composition
function nativePromiseVersion() {
  returnsFirstPromise()
  .then((firstResVal) => {
    console.log(firstResVal);
    return returnsSecondPromise(firstResVal);
  })
  .then((secondResVal) => {
    console.log(secondResVal);
  });
}

//and now an async version
async function asyncAwaitVersion() {
  const firstResVal = await returnsFirstPromise();
  console.log(firstResVal);
  const secondResVal = await returnsSecondPromise(firstResVal);
  console.log(secondResVal);
}

/****************************************/
/****************************************/
/****************************************/

//Its possible to use regular error handling within async functions, in place of the promise's .catch method, await throws an error with the rejection reason if promise is rejected.  you can use try, catch and finally.
async function asyncFunctionWithErrorHandling() {
  try {
    const firstResVal = await returnsFirstPromiseButFails();
    console.log(firstResVal);
    const secondResVal = await returnsSecondPromise(firstResVal);
    console.log(secondResVal);
  } catch(err) {
    console.log(err);
  }
}

/****************************************/
/****************************************/
/****************************************/

//Concurrent promises can be run inside an async function with appropriate use of await keyword, or Promise.all.  In the first example, when you set the returnsPromise functions equal to a variable, this sets off the code in the returnsPromise function immediately.  This way, both returnsPromise function run concurrently.  This is faster than if you added await in front of each returnsPromise function when you initialize it, e.g const firsResVal = await returnsFirstPromise(); because returnsFirstPromise() would have to complete before returnsSecondPromise() can begin.  In the second example, promise.all will immediately return a rejected promise upon one of the returnsPromise() functions returning a rejected promise. This is good if you wanted to add in error handling.  The first example won't return immediately upon a rejected promise, it will wait until both promises settle.

async function asyncFunctionConcurrent() {
  const firstResVal = returnsFirstPromise();
  const secondResVal = returnsSecondPromise();
  console.log(await firstResVal, await secondResVal);
}

async function asyncFunctionPromiseAll() {
  const resValArray = await Promise.all([returnsFirstPromise(), returnsSecondPromise()]);
  for (let i=0; i<resValArray.length; i++) {
    console.log(resValArray[i]);
  }
}