var fs = require('fs');
var path = require('path');

var filtered = new Array;

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if(err) {
            return callback(err);
        }
        list.forEach(function (file) {
            if(path.extname(file) == '.'+ext)
                filtered.push(file);
        });
        callback(null,filtered);
    });

}

