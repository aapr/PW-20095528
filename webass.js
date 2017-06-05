require('net').createServer(function(socket){
	socket.on('data', function(data){
		console.log(data.toString());
	});

	socket.write('HTTP/1.1 200 OK\n\n')
	socket.end();

}).listen(5528);
