var helpers = require('./helpers.js');

exports.show = function(req, res){
	req.key = "projects";
	console.log(req.key);
	helpers.getProject(req, function(content){
		res.render('index', {currentproject: content, root: './public'});
	})
}