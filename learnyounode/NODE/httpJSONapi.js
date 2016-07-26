var http = require('http');
var url = require('url');

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
    } else if(request.method == 'GET') {
        var parsedUrl = url.parse(request.url, true);
        if(parsedUrl.pathname.toUpperCase() == '/api/parsetime'.toUpperCase()) {
            var date = new Date(parsedUrl.query.iso);
            var timeObject = {'hour':date.getHours(),'minute':date.getMinutes(),'second':date.getSeconds()};
            console.log(timeObject);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(timeObject));
        } else if(parsedUrl.pathname.toUpperCase() == '/api/unixtime'.toUpperCase()) {
            var date = new Date(parsedUrl.query.iso);
            var timeObject = {'unixtime':date.getTime()};
            console.log(timeObject);
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(timeObject));
        }
        
        
        //response.end(JSON.stringify(parsedUrl));
        //console.log(parsedUrl);
        
        
        
    }
    
    
});
server.listen(process.argv[2]);