const chuckJokeEl = document.querySelector('#chuckJoke');
const chuckJokeUrl = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
const chuckJokeHost = 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com';
const chuckJokeKey = '7225b26f44mshf669f1e9629b0b7p14daa7jsn6c89ef015e93';

function getChuckJoke () {
    
    const xhr = new XMLHttpRequest();

    xhr.withCredentials = true;
    xhr.responseType = 'json';

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response);
        }
    };

    xhr.open('GET', chuckJokeUrl);
    xhr.setRequestHeader('x-rapidapi-host', chuckJokeHost);
    xhr.setRequestHeader('x-rapidapi-key', chuckJokeKey);
    xhr.setRequestHeader('accept', 'application/json');

    xhr.send();
}

function renderResponse (response) {
    
    chuckJokeEl.innerHTML = response.value;
}

getChuckJoke();