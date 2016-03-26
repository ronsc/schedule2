module.exports = (function(app) {
	var data = [];

	app.post('/course/save', function(req, res) {
		console.log(req.body)
		res.json(req.body);
	});

	app.get('/course/listall', function(req, res) {
		res.send(data);
	});
});