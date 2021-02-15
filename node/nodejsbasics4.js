//example of http server, serving up an html file

const fs = require('fs');
const http = require('http');

function requestListener(request, response) {
    const website = './index.html';
    const callback = (err, data) => {
        if (err) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(`Error!\n${err}`);
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
        }
    };
    fs.readFile(website, 'utf-8', callback);
}
const PORT = process.env.PORT || 4001;

const server = http.createServer(requestListener);

server.listen(PORT);

// visit http://localhost:4001/