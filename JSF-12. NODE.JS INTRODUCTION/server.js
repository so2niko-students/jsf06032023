const http = require("http");
const url = require("url");

function random(from = 0, to = 256){
    return Math.floor(Math.random() * (to - from) + from);
}

http.createServer(function (request, response) {
    let answer = 'Testing NodeJS server\n';
    const q = url.parse(request.url, true).query;

    if(q.type == 'random'){
        answer = `Random: ${ random(0, 100) }`;
    }

    if(q.type == 'random-color'){
        answer = `rgb(${ random() },${ random() },${ random() });`;
    }

    console.log(q);
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(answer);
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');