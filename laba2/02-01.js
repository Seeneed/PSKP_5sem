var http = require('http');
var fs = require('fs');
const route = 'html';

http.createServer(function (request, response) {
    if(request.url === '/' + route){
        let html = fs.readFileSync('./index.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }
    else
        response.end('<h1>Error!</h1>');
}).listen(5000);

console.log('Server running at http://localhost:5000/html');