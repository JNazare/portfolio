var helpers = require('./helpers.js');

exports.show = function(req, res){
	helpers.getProject(req, function(content){
		res.render('index', {currentproject: content, root: './public'});
	})
}