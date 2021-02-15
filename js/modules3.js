/*ES6 export: export default and named exports (named exports either done upon declaration or in one line between {})
Node.js doesn't support this by default, so module.exports is usually used for Node.js and ES6 syntax for front-end
ES6 syntax is generally considered easier and more flexible
named exports can export any top-level var, let, const, function, or class upon declaration with export keyword (commented out below)
or export multiple variables in one line between braces {} as shown near bottom, with advantage of being able to optionally use aliases
*/

let Menu = {
    testProp: 'property of an exported object from ./modules3.js'
};
/*export*/ let specialty = 'exported string from ./modules3.js';
/*export*/ function isVegetarian() {
};
/*export*/ function isLowSodium() {
};
function isSugarFree() {
};

/*
should not mix the two styles of named exports in one file, but can use both export default and one of the named export styles in same file, but best to only use one or the other unless for specific reasons
e.g. if users of your module may only want to import a specific function (the default) but still need option to import other things (named exports)
*/

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium, isSugarFree };
export default Menu;