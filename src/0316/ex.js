var express = require('express');
var app = express();

var mysql = require("mysql");
//进行数据库连接
var connection = mysql.createConnection({
	host: 'localhost', //localhost
	user: 'test',
	password: '123456789',
	database: 'laoyao'
});

app.get('/insert', function(req, res) {
	var params = req.query;
	//res.send('index');
	/*connection.query('INSERT INTO `class`(`skill`, `name`) VALUES ("' + params.skill + '","' + params.name + '")', function(error, results, fields) {
		if(error) throw error;
		console.log('The solution is: ', results);
		//connection.end();
		//查询
		connection.query('SELECT * FROM class', function(error, results, fields) {
			if(error) throw error;
			console.log('结果集: ', results);
			obj.lists = results
				//connection.end();
			response.end(JSON.stringify(obj))
		});
	});*/
})

app.get('/select', function(req, res) {
	var params = req.query;
	console.log(params)
	connection.query('SELECT * FROM class', function(error, results, fields) {
		if(error) throw error;
		console.log('结果集: ', results);
		var obj = {}
		obj.lists = results;
		res.send(params.callback + '(' + JSON.stringify(obj) + ')')
	});
})

var server = app.listen(8081, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})