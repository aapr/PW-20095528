require('net').createServer( function(socket){
	socket.on('data', function(data){
		console.log(data.toString());
	});
	socket.write('http/1.1 200 OK \n\n OK')
	socket.end();
})

.listen(8080,function(){
	console.log('OK');
})