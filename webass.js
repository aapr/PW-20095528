var express = require('express');
var path = require('path');
var app = express();
// var exphbs = require('express-handlebars');

// app.engine('handlerbars', exphbs({defaultLayout: 'home'}));
// app.set('view engine', 'handlebars')

// app.use('/static', express.static(__dirname + 'public'))

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(5528);
