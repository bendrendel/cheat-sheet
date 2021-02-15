
//Helper logging function for below examples
const logToElement = (elementId, valueToLog) => {
    const logElement = document.getElementById(elementId);
    logElement.innerHTML = valueToLog;
};

//Example basic promise
const executorFunction = (resolve, reject) => {
    if (someCondition) {
        resolve('I resolved!');
    } else {
        reject('I rejected!');
    }
};
const myFirstPromise = new Promise(executorFunction);

//setTimeout Example - Example basic setTimeout (Node function)
const callback = () => {logToElement('setTimeout-example', 'This should appear after at least 1000ms')};
setTimeout(callback, 1000);

//Example simple promise with setTimeout
const returnPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve('I resolved!')}, 1000);
    });
};
const promiseA = returnPromiseFunction();

//then Example - Example promise with .then
let promiseB = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.random();
        if(num < 0.5) {
            resolve('Resolved valued after at least 1500ms');
        } else {
            reject('Rejection reason after at least 1500ms');
        }        
        },
        1500
    )
});

const successHandlerB = (resolvedValue) => {
    logToElement('then-example', resolvedValue);
};

const failureHandlerB = (rejectionReason) => {
    logToElement('then-example', rejectionReason);
};

promiseB.then(successHandlerB, failureHandlerB);

//catch Example
let returnPromiseC = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num < 0.5) {
                resolve('Resolved valued after at least 2000ms');
            } else {
                reject('Rejection reason after at least 2000ms');
            }
            },
            2000)
        }
    )
};

const successHandlerC = (resolvedValue) => {
    logToElement('catch-example', resolvedValue);
};

const failureHandlerC = (rejectionReason) => {
    logToElement('catch-example', rejectionReason);
};

returnPromiseC(Math.random())
    .then(successHandlerC)
    .catch(failureHandlerC);

//Composition Example (the functions in this example aren't defined so this doesn't actually run)
//checkInventory returns a promise which is either resolved or rejected
//if resolved, then the proceeding .then method will run the provided anonymous function as the success handler
//this .then will then return the promise from processPayment which again will either be resolved or rejected
//if rejected, then since the proceeding .then method has no failureHandler, it will return a promise that is rejected with the same rejection reason as the calling promise
//each successive .then call will treat the rejected promise the same way, but the .catch statement will run in response to the rejected promise at the end

checkInventory(orderArray)
.then((resolvedValueArray) => {
    return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
    return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
    console.log(successMessage);
})
.catch((errorMessage) => {
    console.log(errorMessage);
});

/*
an equivalent refactoring without promises, using callbacks

const orderArray = //Array of items to order
const accountNumber = //Account number to pay from
const address = //address to ship to
const order = {
    orderArray: orderArray,
    accountNumber: accountNumber,
    address: address,
};

//This function call is equivalent to the composition of promises above, complex nesting, harder to read, debug, and scale
checkInventory(order, (inventoryError, inventoryResolution) => {
    if (inventoryError) throw inventoryError;
    processPayment(inventoryResolution, (paymentError, paymentResolution) => {
        if (paymentError) throw paymentError;
        shipOrder(paymentResolution, (shipError, shipResolution) => {
            if (shipError) throw shipError;
            console.log(shipResolution);
        });
    });
});

function checkInventory(order, callback) {
    const orderIsAvailable = //true or false depending if items in order.orderArray are in inventory, blocks stack while looking up inventory
    if (orderIsAvailable) {
        const resolvedValue = order;
    } else {
        const err = new Error('Insufficient inventory');
    }
    callback(err, resolvedValue);
}

function processPayment(order, callback) {
    const orderTotal = //total cost of order based on order.orderArray
    const fundsAreSufficient = //true or false depending if orderTotal <= balance for given order.accountNumber, blocks stack while looking up account
    if (fundsAreSufficient) {
        //take money out of account - blocks stack while completing this task
        const resolvedValue = order;
    } else {
        const err = newError('Insufficient account balance');
    }
    callback(err, resolvedValue);
}

function shipOrder(order, callback) {
    const addressIsValid = //true or false depending on if order.address is valid to ship to, blocks stack while checking
    if (addressIsValid) {
        //alert warehouse to ship - blocks stack while alerting
        const resolvedValue = 'Order successfully shipped';
    } else {
        const err = newError('Invalid shipping address');
    }
    callback(err, resolvedValue);
}
*/

//Concurrency example
//the checkAvailability function isn't actually defined, but it takes an inventory item and number of items as arguments, and returns a promise either resolved if items are available, or rejected if not
//availabilityPromises is a promise that is either resolved with an array of resolved values if all items are available, or rejected with the rejection message of whichever item first came back as unavailable
let availabilityPromises = Promise.all([checkAvailability('Aviator Sunglasses', 1), checkAvailability('Olive Cargo Pants', 1), checkAvailability('Leather Duffle Bag', 2)]);
availabilityPromises
    .then((arrayOfResolvedValues) => {
        console.log(arrayOfResolvedValues);
    })
    .catch((rejectionReason) => {
        console.log(rejectionReason);
    });