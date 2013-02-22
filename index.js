//	require is built in to load modules
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

//	map various pathnames to methods in the router
var handle = {
	'/': requestHandlers.start,
	'/start': requestHandlers.start,
	'/upload': requestHandlers.upload
};

server.start(router.route, handle);