'use strict';

var nocklib = require('../lib/nocklib');

module.exports = {
	getIndex: function(req, res) {
		res.render('index');
	},
	getUser: function(req, res) {
		nocklib.getUser(req.params.username, function(err, user) {
			if (user)
				res.send('1');
			else
				res.send('0');
		});
	},
	signup: function(req, res) {
		console.log('made it here');
		nocklib.createUser(req.body.username,
			req.body.email,
			req.body.password,
			function(err, user) {
				console.log(user);
				res.redirect('/portfolio');
			}
		);
	}
}