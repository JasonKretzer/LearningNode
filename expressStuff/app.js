var express = require('express');
var logger = require('./logger');
var blocks = require('./routes/blocks');

var app = express();

app.use(logger);
app.use(express.static('public'));


var locations = {
        'Fixed' : 'First floor',
        'Movable' : 'Second floor',
        'Rotating' : 'Penthouse'
};

app.use('/blocks', blocks);




app.listen(3000,function(){
    console.log("Listening at port 3000");
});
