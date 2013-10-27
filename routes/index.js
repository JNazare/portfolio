var helpers = require('./helpers.js');

exports.index = function(req, res){
	helpers.getprojects(req, function(files){
		titles = files[0];
		dates = files[1];
		dateObjs = files[2];
		urls = files[3];

		projects = []
		for(i=0; i<titles.length; i++){
			projects[i] = {title: titles[i], date: dates[i], dateObj: dateObjs[i], url: "/projects/"+urls[i]};
		}

		projects.sort(function(a,b){
			var c = new Date(a.date);
			var d = new Date(b.date);
			return d-c;
		});
		
		console.log(urls);
		res.render('index', {projects: projects});
	});
};