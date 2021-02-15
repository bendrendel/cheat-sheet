//Basic Handlebars
const basicSource = document.getElementById('basic-source').innerHTML;
const basicTemplate = Handlebars.compile(basicSource);
const basicContext = {
    name: 'Ben'
};
const basicCompiledHTML = basicTemplate(basicContext);
const basicContainer = document.getElementById('basic-container')
basicContainer.innerHTML = basicCompiledHTML;

//If block
const ifSource = document.getElementById('if-source').innerHTML;
const ifTemplate = Handlebars.compile(ifSource);
const ifContext = {
    argument: true
};
const ifCompiledHTML = ifTemplate(ifContext);
const ifContainer = document.getElementById('if-container');
ifContainer.innerHTML = ifCompiledHTML;

//Each block
const eachSource = document.getElementById('each-source').innerHTML;
const eachTemplate = Handlebars.compile(eachSource);
const eachContext = {
    someArray: ['this', 'that', 'the other']
}
const eachCompiledHTML = eachTemplate(eachContext);
const eachContainer = document.getElementById('each-container');
eachContainer.innerHTML = eachCompiledHTML;

//Complex Handlebars
const complexSource = document.getElementById('complex-source').innerHTML;
const complexTemplate = Handlebars.compile(complexSource);
const complexContext = {
    languages: [{
        name: 'Javascript',
        modern: true
    },
    {
        name: 'COBOL',
        modern: false
    },
    {
        name: 'Python',
        modern: true
    },
    {
        name: 'Fortran',
        modern: false
    }]
};
const complexCompiledHTML = complexTemplate(complexContext);
const complexContainer = document.getElementById('complex-container');
complexContainer.innerHTML = complexCompiledHTML;