var fs = require('fs');

var mapdates = {
	"january":1,
	"february":2,
	"march":3,
	"april":4,
	"may":5,
	"june":6,
	"july":7,
	"august":8,
	"september":9,
	"october": 10,
	"november":11,
	"december":12
}

exports.getprojects = function(req, callback){
	fs.readdir('projects', function(err, list) {
		var titles = [];
		var dates = [];
		var captions = [];
		var dateObjs = [];
		var urls = [];
		for (var i=0; i<list.length; i++)
		{ 
			if (err) { throw err; }
			var current = list[i].toLowerCase().split("-");
			urls[i] = list[i].split(".")[0];
			var title = current.slice(0,current.length-1).join(" ");
			titles[i] = title.toUpperCase();
			var date = current[current.length-1];
			var date = date.split(".");
			var date = date.slice(0, date.length-1)[0].toLowerCase();
			date = date.split("_");
			var dateObj = new Date(year=parseFloat(date[1].trim()), month=mapdates[date[0]]);
			dateObjs[i] = dateObj;
			date = date.join(" ");
			dates[i] = date;
			fs.readFile("projects/"+list[i], 'utf8', function(err, contents){
				if (err) { throw err; }
				caption = contents.split("\n")[0];
				caption = caption.split(":")[1];
				if (caption){
					caption = caption.trim();
					captions[i] = caption;
				}
			});
		}
		var all = [titles, dates, dateObjs, urls]
		callback(all);	
	});
}

exports.getProject = function(req, callback){
	var url = "projects/"+req.params.project+".md";
	fs.readFile(url, 'utf8', function(err, data){
		if (err) { throw err; }
		callback(data);
	});
}