var http = require('http');

var addr = process.argv[2];
//"https://codigo.gocodigo.net/hub/219/schedule/2016/6/15/";


var getStuff = function (response) {
    response.setEncoding('utf8');
    response.on("data", console.log);
    //response.on('data',(chunk) => {
        //console.log('got %d bytes of data', chunk.length);
        //console.log('got %d bytes of data', chunk.length);
    //});
}

http.get(addr,getStuff);
