var http = require('http');
var fs = require('fs');
const route = 'jquery';

http.createServer(function(request, response){
    if(request.url === '/api/name'){
        response.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
        response.end('Мамонько Денис Александрович');
    }
    else if(request.url === '/' + route)
    {
        let html = fs.readFileSync('./jquery.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(html);
    }
    else
        response.end('<h1>Error!</h1>');
}).listen(5000);

console.log('Server running at http://localhost:5000/jquery');