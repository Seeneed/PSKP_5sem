var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    if(request.url === '/api/name'){
        response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        response.end('Мамонько Денис Александрович');
    }
    else if(request.url === '/xmlhttprequest'){
        let html = fs.readFileSync('./xmlhttprequest.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }
    else
        response.end('<h1>Error!</h1>');
}).listen(5000);

console.log('Server running at http://localhost:5000/xmlhttprequest');
