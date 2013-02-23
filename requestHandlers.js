//	for accessing file system
var fs = require('fs');
//	for parsing query strings
var querystring = require('querystring');
//	for handling uploads
var formidable = require('formidable');

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

function upload(response, request){

	var form = new formidable.IncomingForm();

	form.parse(request, function(error, fields, files){

		fs.rename(files.upload.path, '/tmp/test.png', function(err){
			if(err){
				fs.unlink('/tmp/test.png');
				fs.rename(files.upload.path, '/tmp/test.png');
			};
		});
		
		response.writeHead(200, {
			'content-type': 'text/html'
		});
		response.end('<img src="/show" />');
	});
};


function show(response){
	fs.readFile('/tmp/test.png', 'binary', function(error, file){
		if(error){
			response.writeHead(500, {'content-type': 'text/plain'});
			response.end(error);
		} else {
			response.writeHead(200, {'content-type': 'image/png'});
			response.write(file, 'binary');
			response.end();
		};
	});
};


exports.start = start;
exports.upload = upload;
exports.show = show;