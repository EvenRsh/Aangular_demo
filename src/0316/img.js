var http = require("http");
var fs = require("fs")
var writerStream = fs.createWriteStream('img/2.jpg');
http.get("http://img.mmjpg.com/small/2017/923.jpg", function(res) {
	res.pipe(writerStream);
})