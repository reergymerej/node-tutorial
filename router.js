/**
* @param {object} handle
* @param {string} pathname
* @param {response} response
* @param {request} request
**/
function route(handle, pathname, response, request){
	console.log('route: ' + pathname);

	if( typeof handle[pathname] === 'function' ){
		handle[pathname](response, request);
	
	} else {
		console.log('no request handler for ' + pathname);
		response.writeHead(404, {
			'content-type':'text/html'
		});
		response.end('not found, sucka');
	};
};


//	expose module API by extending exports
exports.route = route;