var http = require('http');
var async = require('async');

async.map([process.argv[2], process.argv[3]], function (item, done){
    var body = '';
    http.get(item, function (response){
        response.on('data', function(chunk) {
            body += chunk.toString();
        });
        response.on('end',function() {
            return done(null, body);
        });
    });
},
function (err, results){
    if(err) {
        console.log(err);
    } else {
        console.log(results);
    }
});
