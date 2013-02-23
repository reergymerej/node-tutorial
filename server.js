var PROTOCOL = 'http';
var PORT = 1887;

var http = require(PROTOCOL);
var url = require('url');



/**
* @method start
* @param {function} route method from the router
* @param {object} handle map of pathnames and corresponding requestHandler methods
**/
function start(route, handle){

	var server = http.createServer(onRequest);

	server.listen(PORT);
	console.log('server listening at ' + PROTOCOL + '://127.0.0.1:' + PORT);

	function onRequest(request, response){

		var pathname = url.parse(request.url).pathname;

		route(handle, pathname, response, request);
	};
};

//	expose API
exports.start = start;