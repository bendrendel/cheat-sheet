//Browser creates the Window object, which holds the DOM, if you run JS in Node, there will be no Window object
let elem = document.getElementById('click-me-btn');

//css properties with dashes like background-color are camelCase without dashes
elem.style.backgroundColor = newColor;

//creating an element, setting properties of that element, and then appending it as the last child of the body element*/
let newElement = document.createElement('p');

newElement.innerHTML = 'This is the new element';

newElement.id = 'myElem';

document.body.appendChild(newElement);

//removing an element, removeChild will not only remove direct children, but any nested element*/
let removeElem = document.getElementById('remove-me');

document.body.removeChild(removeElem);

//hiding an element - note this is not a css style property[ but an HTML element attribute*/
document.getElementById('hide-me').hidden = true;

/*traversing the DOM
document is root of the DOM
querySelector() takes a CSS selector (e.g. p, .class, #id) and return first matching element
*/

document.querySelector('div').style.color = 'purple';

const pageTitle = document.title;
const pageTitleDiv = document.getElementById('page-title');
pageTitleDiv.innerHTML = `<p>${pageTitle}</p>`;

let parentNode = document.getElementById('parent-node');
let childNodeOne = document.getElementById('child-node-1');
let childNodeTwo = document.getElementById('child-node-2');
let childNodeThree = document.getElementById('child-node-3');

childNodeOne.innerHTML = childNodeOne.parentNode;
childNodeTwo.innerHTML = parentNode.children;
childNodeThree.innerHTML = parentNode.firstChild;

/*js stores events as event objects
registered events are those events assigned an event handler functions which becomes a property of the event object
event attributes like 'onclick' 'onmouseover', etc. can be set in html file, setting them equal to an invoked function, or set as properties of the element in javascript, setting them equal to a function (not invoked)
element being interacted with is the event target
must use addEventListener to add more than one event handler to an event, it takes an event argument like 'click' or 'mouseover', etc.
*/

newElement.onclick = () => newElement.style.color === 'blue' ? newElement.style.color = 'green' : newElement.style.color = 'blue';

let myEventHandler = function() {
    if (newElement.style.backgroundColor === 'green') {
        newElement.style.backgroundColor = 'blue';
    } else {
        newElement.style.backgroundColor = 'green';
    }
}

let dontUseMe = function () {
    alert('Failure');
}

newElement.addEventListener('click', myEventHandler);

newElement.addEventListener('click', dontUseMe);

newElement.removeEventListener('click', dontUseMe);

let fillMe = document.getElementById('fill-me');
let keyPresser = document.getElementById('key-presser');

fillMe.addEventListener('click', (event) => {
    fillMe.innerHTML = `${event.target} <br> ${event.type} <br> ${event.timeStamp}`;
})

/*mouse events*/
fillMe.addEventListener('mousedown', () => fillMe.style.backgroundColor = 'yellow');
fillMe.addEventListener('mouseup', () => fillMe.style.backgroundColor = 'white');
fillMe.addEventListener('mouseover', () => fillMe.style.border = '1pt solid red');
fillMe.addEventListener('mouseout', () => fillMe.style.border = '1pt solid black');

/*keyboard events*/
document.addEventListener('keydown', () => keyPresser.style.backgroundColor = 'lightblue');
document.addEventListener('keyup', () => keyPresser.style.backgroundColor = 'white');
document.addEventListener('keypress', () => keyPresser.style.border = '1px solid red');
document.addEventListener('keydown', (event) => keyPresser.innerHTML = event.key);