var app         = require('express')();
var config      = require('config');

app.listen(config.get('port'));

app.get('/', function(req, res){
    res.send("Hi");
});
