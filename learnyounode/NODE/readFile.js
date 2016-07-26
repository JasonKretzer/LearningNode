var fs = require('fs');

var buff = fs.readFileSync(process.argv[2]);

var lines = buff.toString().split('\n');

console.log(lines.length-1);