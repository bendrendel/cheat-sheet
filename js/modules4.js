/*ES6 import: import and named imports
for both import types, if the string at end of statement begins with a dot or slash, then it will be treated as a filepath
otherwise import default at least can be used to import node core modules (no dot or slash)
if filename has no extension then js is assumed


import default, to be used with export default
Menu is name of the variable to store the export default from ./modules3.js
This name doesn't have to match the name of the export default in ./modules3.js
*/
import Menu from './modules3.js';

/*
Named imports, to be used with named exports (either style of named exports)
Don't have to import all named exports from a module, can just import the ones you want from it
Can alias imports that were not aliased in the export
Can import all named exports from a module using * (see commented code below), and then access them as properties of an object with a given name
*/
import { chefsSpecial, isVeg, isLowSodium as saltFree } from './modules3.js';

/*
import * as Carte from './modules3.js';
console.log(Carte.chefsSpecial);
Carte.isVeg();
*/

alert('./module4.js imported this ' + Menu.testProp);
alert('./module4.js imported this ' + chefsSpecial);