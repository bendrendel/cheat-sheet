/*
Node export example
*/

let Menu = {};
Menu.specialty = 'property of an exported object from ./modules1.js';
Menu.drinks = ['Coke', 'Lemonade', 'Chocolate Shake'];

module.exports = Menu;

/*
Alternatively, define and export the object all in one line:
module.exports = {
    specialty: 'Roasted Beet Burger with Mint Sauce',
    drinks: ['Coke', 'Lemonade', 'Chocolate Shake']
};
*/