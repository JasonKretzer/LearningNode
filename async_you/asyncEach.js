var http = require('http');
var async = require('async');

async.each([process.argv[3], process.argv[4]], function (item, done){
    http.get(item, function (response){
        response.on('data', function(chunk){});
        response.on('end',done(null));
    }).on('error',function(err){done(err);});
},
function (err){
    if(err) {
        console.log(err);
    }
});
