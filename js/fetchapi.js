
/*
fetch() GET/POST Request Boilerplate

Request is made and sent to api-to-call.com
If a response comes back, then regardless of http status, the promise is settled as fulfilled with a 
response object as the resolved value.  Response objects have useful properties like .status to get the
http status code, and .ok which returns true if the status is between 200-299.

You'll want to use .json() on the resopnse object to extract the
json body content from the http response object.  The body mixin provides other methods to extract other 
types of content from the body besides json, which can include ArrayBuffers, Blobs, etc. and can be extracted
with methods like .blob() or .arrayBuffer().

In the success handler you'll want to check whether the http status is an error status or not,
Here, if the http status of the response is not ok, then the success handler throws an Error, which returns a rejected promise with the error message as at the reject reason.
If the server could not be reached at all (e.g. server is down or heavy traffic), then the promise is settled as rejected, and the failure handler runs ("networkError")

Alternatively, you may not include the network error handler, and instead put a .catch() at the end of all
this that would catch the network error instead, as well as any http errors, or any errors that come with handling the json response.


fetch(https://api-to-call.com/endpoint, {settings object}).then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed!');
}, networkError => {
    console.log(networkError.message);
}).then(jsonResponse => {
    return jsonResponse;
})


The {settings object} is optional depending on circumstances
e.g. a post request needs the following to make it a POST request with data to send
{method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: '200'})}
The settings object can also specify things like
mode: cors / no-cors / same-origin / etc
cache: no-cache / reload / force-cache / etc
credentials: same-origin / include / omit / etc

It can be useful to create a request object with new Request(), which takes the exact same 
two parameters as fetch, i.e. a url and a settings object.  Then you can pass the request object
directly into the fetch call.  This is handy if you need to use the same request multiple times, and
provides easy ways to change settings object.  There is also a new Header() class to make headers that
can be passed in.
*/

//example fetch get request
const url1 = "https://api.datamuse.com/words";
const queryparams1 = "?sl=";
const word1 = "computer";
const endpoint1 = url1 + queryparams1 + word1;

fetch(endpoint1).then((response) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed');
}, networkError => {
    console.log(networkError);
}).then(jsonResponse => {
    const renderArea = document.getElementById('fetch-get');
    renderArea.innerHTML = JSON.stringify(jsonResponse);
})

//example fetch post request
const url2 = 'https://api.rebrandly.com/v1/links';
const apikey2 = '1de491cdd8834b879e0578f364ea3d36';
const data2 = JSON.stringify({destination: 'https://www.youtube.com/watch?v=-z4xgEXqpok&list=RDhu1_b6aLtyM&index=9'});
const settings = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        apikey: apikey2
    },
    body: data2
}

fetch(url2, settings).then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed');
}, networkError => {
    console.log(networkError);
}).then(jsonResponse => {
    const renderArea = document.getElementById('fetch-post');
    renderArea.innerHTML = JSON.stringify(jsonResponse);
})


/*
Boilerplate async await get request with fetch
async function getData() {
    try {
        const response = await fetch(url, {settings});
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request failed');       
    } catch(err) {
        console.log(err);
    }
}

where settings object is optional depending on circumstances
e.g. a get request doesn't need one, but a post request does, e.g. {method: 'POST', body: JSON.stringify({id: '200'})}
*/

//example async await get request
async function getWords() {
    try {
        const url3 = "https://api.datamuse.com/words";
        const queryparams3 = "?sl=";
        const word3 = "computer";
        const endpoint3 = url3 + queryparams3 + word3;

        const response3 = await fetch(endpoint3);
        if (response3.ok) {
            const jsonResponse3 = await response3.json();
            const renderArea = document.getElementById('asyncawait-get');
            renderArea.innerHTML = JSON.stringify(jsonResponse3);
        } else {
            throw new Error('Request failed');
        }
    } catch(err) {
        console.log(err);
    }
}

getWords();

//example async await post request
async function getShortURL() {
    const url = 'https://api.rebrandly.com/v1/links';
    const apikey = '1de491cdd8834b879e0578f364ea3d36';
    const data = JSON.stringify({destination: 'https://www.youtube.com/watch?v=-z4xgEXqpok&list=RDhu1_b6aLtyM&index=9'});

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                apikey
            },
            body: data
        });   
        if (response.ok) {
            const jsonResponse = await response.json();
            const renderArea = document.getElementById('asyncawait-post');
            renderArea.innerHTML = JSON.stringify(jsonResponse);
        }
    } catch (err) {
        console.log(err);
    }
}

getShortURL();