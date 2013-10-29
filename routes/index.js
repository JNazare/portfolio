var helpers = require('./helpers.js');

exports.index = function(req, res){
	req.key = "projects";
	helpers.getprojects(req, function(projects){
		req.key = "work";
		helpers.getprojects(req, function(work){
			res.render('index', {projects: projects, work: work});
		})
	});
};