var http = require('http');
var bl = require('bl');

var results = [];
var count=0;

var getStuff = function (index) {
    http.get(process.argv[2+index], function (response){
        response.pipe(bl(function (err, data) {
            if(err) {
                return console.error(err);
            }
            results[index] = data.toString();
            count++;

            if(count == 3) {
                printResults();
            }
        }))
    });
}

var printResults = function() {
    for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

for (var i = 0; i < 3; i++) {
    getStuff(i);
}
