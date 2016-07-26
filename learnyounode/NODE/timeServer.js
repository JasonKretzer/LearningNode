var net = require('net');
var server = net.createServer(function(socket) {
    //stuff
    var dateStr = '';
    var date = new Date();
    dateStr = 
        date.getFullYear()
        +'-'+
        zeroFill(date.getMonth()+1)
        +'-'+
        zeroFill(date.getDate())
        +' '+
        zeroFill(date.getHours())
        +':'+
        zeroFill(date.getMinutes())
        +'\n';
    socket.end(dateStr);
});
server.listen(process.argv[2]);



function zeroFill(num) {
    if(num < 10) {
        return '0'+num;
    } else {
        return num;
    }
}