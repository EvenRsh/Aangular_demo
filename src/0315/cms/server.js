var http = require("http");
var url = require("url")
var fs = require("fs")
http.createServer(function(request,response){
	//response.end("123")
	var pathname = url.parse(request.url).pathname;
	console.log(pathname)
	var file = pathname.slice(1);
	console.log(file)
	var filePath = './public/'
	console.log(filePath+file);
	fs.readFile(filePath+file,function(err,data){
		console.log(data)
		response.end(data)
	})
}).listen(8765);
