var express = require('express');
var app = express();

app.use(express.static('public'));
//eventually replace with a route function from express.Router()
app.get('/cities', function(request,response){
    var cities = ['Lotopia', 'Caspiana', 'Indigo'];
    response.json(cities);
});
 
module.exports = app;
