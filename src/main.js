(function() {
	'use strict';

	var express = require('express');
	var fs = require('fs');
	var bodyParser = require('body-parser');
	var app = express();
	var dir = __dirname;

	app.set('port', (process.env.PORT || 2222));

	app.use(bodyParser.json());

	// main route
	app.get('/', function(req, res) {
		res.sendfile('app/index.html');
		// res.send('schedule on Heroku.com');
	});

	// dynamic routes
	fs.readdirSync(dir + '/routes').forEach(function(file) {
		if(file[0] == '.') return;
		var routeName = file.substr(0, file.lastIndexOf('.'));
		require(dir + '/routes/' + routeName)(app);
	});

	app.listen(app.get('port'), function() {
		console.log('Node app is running on port', app.get('port'));
	});
})();
