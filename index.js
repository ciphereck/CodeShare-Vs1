var app         = require('express')();
var config      = require('config');
var http        = require('http').Server(app);
var io          = require('socket.io')(http);

require('./routes')(app);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
    socket.on('message', function(msg){
      io.emit('message', msg);
      console.log("Key pressed");
    });
  });
  
  app.listen(config.get('port'), function(){
      console.log("Server Running at "+ config.get('port'));
  });