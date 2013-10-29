var helpers = require('./helpers.js');

exports.show = function(req, res){
	req.key = "work";
	console.log(req.key);
	helpers.getProject(req, function(content){
		res.render('index', {currentproject: content, root: './public'});
	})
}