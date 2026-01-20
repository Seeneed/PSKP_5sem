var http = require('http');
var fs = require('fs');
const route = 'png';

http.createServer(function (request, response){
    const fname = './belka.png';
    let png = null;

    if(request.url === '/' + route){
            fs.stat(fname, (err, stat) => {
        if(err){console.log('error:', err);}
        else{
            png = fs.readFileSync(fname);
            response.writeHead(200, {'Content-Type': 'image/jpeg', 'content-length': stat.size});
            response.end(png, 'binary');
        }
    });
    }
    else
        response.end('<h1>Error!</h1>');
}).listen(5000);

console.log('Server running at http://localhost:5000/png');