//nodejs内建服务，操作文件
var fs = require("fs")
//console.log(fs)
/*fs.readFile('index.html',function(err,data){
	if(err){
	}else{
		console.log(data.toString())
	}
})*/
var data = fs.readFileSync('index.html');
fs.writeFile('input.mp4', '我是通过写入的文件内容！',  function(err) {
	
})
console.log(data.toString())
console.log("start")