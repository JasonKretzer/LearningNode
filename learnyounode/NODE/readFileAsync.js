var fs = require('fs');
/*
var buff = undefined;
var lines = undefined;

function go(print) {
    fs.readFile(process.argv[2], function (err, buff) {
        lines = buff.toString().split('\n');
        print();
    });

}


//var lines = buff.toString().split('\n');
function print() {
    console.log(lines.length-1);
}

go(print);
*/

var file = process.argv[2];

fs.readFile(file, 'utf8', callback);

function callback(err, results) {
    var lines = results.toString().split('\n').length - 1;
    console.log(lines);
}