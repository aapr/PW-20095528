var express = require('express');
var path = require('path');
var app = express();

require('net').createServer(function(socket){
	socket.on('data', function(data){
		console.log(data.toString());
	});

	socket.write('HTTP/1.1 200 OK\n\n')
	socket.end();

	app.get('/', function(req, res){
		res.sendfile(path.join(__dirname + '/index.html'));
	});


}).listen(5528);
