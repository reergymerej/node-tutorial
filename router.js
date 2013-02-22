/**
* @param {object} handle
* @param {string} pathname
**/
function route(handle, pathname){
	console.log('route: ' + pathname);

	if( typeof handle[pathname] === 'function' ){
		handle[pathname]();
	} else {
		console.log('no request handler for ' + pathname);
	};
};


//	expose module API by extending exports
exports.route = route;