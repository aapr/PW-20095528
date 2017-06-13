var express = require('express');
var path = require('path');
var app = express();
var exphbs = require('express-handlebars');
var helpers = require('./lib/helpers');

app.use('/static',express.static('public'));
app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	helpers: helpers, 
	partialsDir: 'views/partials/'
}));
app.set('view engine', 'handlebars');


app.get('/', function(req, res){
	res.render('home');
});

app.get('/about', function(req, res){
	res.render('about');
});

app.listen(5528);