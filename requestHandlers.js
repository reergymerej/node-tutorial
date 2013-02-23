var fs = require('fs');
var exec = require('child_process').exec;
var querystring = require('querystring');

function start(response){
	console.log('start');

	var filePath = './index.html';

	fs.readFile(filePath, function(error, content){
		if(!error){
			response.writeHead(200, {
				'context-type':'text/html'
			});

			response.end(content);
		}
	});
};

function upload(response, postData){
	console.log('upload');	
	response.writeHead(200, {
		'content-type': 'text/plain'
	});
	response.end('upload page: ' + querystring.parse(postData).text );
};

exports.start = start;
exports.upload = upload;