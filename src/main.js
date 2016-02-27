(function() {
	'use strict';

	var express = require('express');
	var fs = require('fs');
	var bodyParser = require('body-parser');
	var app = express();
	var dir = __dirname;

	app.set('port', (process.env.PORT || 8080));

	app.use(bodyParser.json());
	// serv static content
	app.use(express.static(__dirname + '/../app'));

	// dynamic routes
	fs.readdirSync(dir + '/routes').forEach(function(file) {
		if(file[0] == '.') return;
		var routeName = file.substr(0, file.lastIndexOf('.'));
		require(dir + '/routes/' + routeName)(app);
	});

	app.listen(app.get('port'), function() {
		console.log('ScheduleAppV2 running on', app.get('port'));
	});
})();
