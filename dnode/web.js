'use strict';

var dnode = require('dnode');
var http = require('http');
var qs = require('querystring');

var d = dnode.connect('localhost', 8090);
d.on('remote', function(remote) {
	http.createServer(function(req, res) {
		if(req.url.match(/^\/login/)) {
			var param = qs.parse(req.url.split('?')[1]);
			remote.auth(param.user, param.pass, function(err, result) {
				res.end(err ? err: result);
			});
		}
	}).listen(process.argv[2]);
});