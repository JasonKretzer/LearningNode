var http = require('http');
var async = require('async');
var fs = require('fs');

async.waterfall(
    [
        function (cb) {
            var fileUrl = process.argv[2];
            var lineUrl = '';
            fs.readFile(fileUrl, 'utf8', function callback(err, results) {
                if(err) {
                    cb(err);
                }
                lineUrl = results.toString();
                cb(null,lineUrl);
            });
        },
        function (lineUrl, cb) {
            var body = '';
            http.get(lineUrl, function (response){
                response.on('data', function (chunk) {
                    body += chunk.toString();
                });
                response.on('end', function () {
                    cb(null, body);
                });
            }).on('error', function (err) {
                cb(err);
            });
        }
    ],
    function(err, result) {
        if(err) {
            return console.error(err);
        } else {
            console.log(result);
        }
    }
);
