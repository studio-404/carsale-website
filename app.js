var express = require('express');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

app.use('/assets', express.static('public'));

// get homepage
app.get('/', function(req, res){
	var homepage = require('./controllers/homepage');
	homepage(app, req, res);
});

//listen to port
app.listen(1337);