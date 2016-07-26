var fs = require('fs'),
    path = require('path');
/*
var lines = undefined;

function go(print) {
    fs.readdir(process.argv[2], function (err, list) {
        lines = list;
        print();
    });

}


//var lines = buff.toString().split('\n');
function print() {
    lines.forEach(function (file) {
        //console.log("%s (%s)", file, path.extname(file));
        if(path.extname(file) == '.'+process.argv[3])
            console.log(file);
    });
        
}


go(print);
*/

var callback = function(err, list) {
    list.map(function(file) {
        if(path.extname(file) == '.'+process.argv[3]) {
            console.log(file);
        }
    });
}
fs.readdir(process.argv[2], callback);
