var app         = require('express')();
var config      = require('config');

app.listen(config.get('port'));
