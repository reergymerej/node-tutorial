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

		var pathname = url.parse(request.url).pathname,
			postData = '';

		request.setEncoding('utf8');

		//	triggered each time a chunk is received
		request.addListener('data', function(chunk){
			postData += chunk;
		});

		//	triggered when the request has finished being received
		request.addListener('end', function(){
			route(handle, pathname, response, postData);
		});
	};
};

//	expose API
exports.start = start;