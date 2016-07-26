var http = require('http');
var bl = require('bl');

var server = http.createServer(function (request, response){
    if(request.method == 'POST'){
        request.pipe(bl(function(err, data) {
            if(err) {
                return console.error(err);
            }
            data = data.toString().toUpperCase();
            response.writeHead(200, {'content-type': 'text/plain'});
            return response.end(data);
        
        }));
    } else {
        return respons.end('I need a post');
    }
    
    
});
server.listen(process.argv[2]);