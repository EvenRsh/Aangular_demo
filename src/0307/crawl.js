var http = require("http");
var https = require("https");
var cheerio = require("cheerio");
var fs = require('fs');

function download(url, callback) {
	http.get(url, function(res) {
		var data = "";
		res.on('data', function(chunk) {
			data += chunk;
		});
		res.on("end", function() {
			callback(data);
		});
	}).on("error", function() {
		callback(null);
	});
}

function downloadImg(resource) {
	resource.forEach(function(src, idx) {
		var num = 1;
		var filename = src.substring(src.lastIndexOf('/') + 1);
		var writestream = fs.createWriteStream('./img/'+filename);
		http.get(src, function(res) {
			res.pipe(writestream);
		});
		writestream.on('finish', function() {
			console.log('page: ' + num + filename);
		});
	})
}
var imgArr = [];
download('http://tu.duowan.com/tu',
	function(data) {
		var $ = cheerio.load(data);
		$(data).find("img").each(function(i, e) {
			console.log("第" + (i + 1) + "个：" + $(e).attr("src"));
			imgArr.push($(e).attr("src"))
		})
		downloadImg(imgArr);
	}
);
