var app         = require('express')();
var config      = require('config');
var http        = require('http').Server(app);
var io          = require('socket.io')(http);
var http        = require('http');
const url = require('url');
const WebSocket = require('ws');

require('./routes')(app);
var comm="";
const server = http.createServer(app);
const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', function connection(ws, req) {

    console.log("Someone Connected");
    ws.send(comm);
    
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        comm=message;
        ws.send(comm);
    });

    ws.on('close', function(c, d){
        console.log('Someone got out');
    });
});



app.listen(config.get('port'), function(){
    console.log("Server Running at "+ config.get('port'));
});