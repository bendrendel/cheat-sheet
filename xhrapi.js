/*
Boilerplate AJAX GET or POST Request using XHR object

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = OPTIONAL

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
    }
}

xhr.open('GET', url);
xhr.send(data);

where data is optional depending on circumstances,
e.g. a get request doesn't need it,
but a post request does, e.g. const data = JSON.stringify({id: '200'});
*/



const renderAreaOne = document.getElementById('render-area-one');
const renderAreaTwo = document.getElementById('render-area-two');
const renderAreaThree = document.getElementById('render-area-three');


//example get request
const xhr = new XMLHttpRequest();
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';
const wordQuery = 'response';
//const additionalParam = '&additionalParam='; <-- example of how another param would be made, it would be concatenated to the endpoint
//const topicQuery = 'value';
const endpoint = url + queryParams + wordQuery;

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        renderAreaOne.innerHTML = xhr.response;
        renderAreaTwo.innerHTML = JSON.stringify(xhr.response);
    }
}

xhr.open('GET', endpoint);
xhr.send();


//example post request
const apikey2 = '1de491cdd8834b879e0578f364ea3d36';
const url2 = 'https://api.rebrandly.com/v1/links';
const data2 = JSON.stringify({destination: 'https://www.youtube.com/watch?v=-z4xgEXqpok&list=RDhu1_b6aLtyM&index=9'});

const xhr2 = new XMLHttpRequest();

xhr2.responseType = 'json';
xhr2.onreadystatechange = () => {
    if (xhr2.readyState === XMLHttpRequest.DONE) {
        const res = JSON.stringify(xhr2.response).replace(/,/g, ", \n");
        renderAreaThree.innerHTML = `<pre>${res}</pre>`;
    }
}

xhr2.open('POST', url2);

xhr2.setRequestHeader('Content-type', 'application/json');
xhr2.setRequestHeader('apikey', apikey2);
xhr2.send(data2);