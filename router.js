/**
* @param {object} handle
* @param {string} pathname
* @param {response} response
* @param {string} postData
**/
function route(handle, pathname, response, postData){
	console.log('route: ' + pathname);

	if( typeof handle[pathname] === 'function' ){
		handle[pathname](response, postData);
	} else {
		console.log('no request handler for ' + pathname);
		response.writeHead(404, {
			'content-type':'text/html'
		});
		response.write('not found, sucka');
		response.end();
	};
};


//	expose module API by extending exports
exports.route = route;