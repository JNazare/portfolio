var fs = require('fs');

exports.show = function(req, res){
	var tempFile="./resume/resume.pdf";
	fs.readFile(tempFile, function (err,data){
		res.contentType("application/pdf");
		console.log(data);
		res.send(data);
	});
}