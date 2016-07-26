var mymod = require("./filteredLS_module.js");

var dir = process.argv[2];
var ext = process.argv[3];


      
var go = function (err,list) {
    if(err)
        console.log(err);
    
    list.forEach(function (file) {
        console.log(file);
    })
}

mymod(dir,ext,go);