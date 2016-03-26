(function() {
	'use strict';

	var promise = require('bluebird');
	var options = {
		promiseLib: promise
	};
	var pgp = require('pg-promise')(options);
	var cn = {
		host: 'localhost',
		port: 5432,
		database: 'test',
		user: 'postgres',
		password: 'password'
	};
	var db = pgp(cn);

	// var user = [4, 'test@test.com', '10-02-2016'];
	// db.query("INSERT INTO users (id, email, created) VALUES ($1, $2, $3)", user);

	db.query("SELECT * FROM users")
		.then(function(data) {
			console.log(data)
		})
		.finally(function() {
			pgp.end();
		});
})();
