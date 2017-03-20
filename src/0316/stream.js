var fs = require('fs')
//数据刚开始为空
var data = '';
//创建一个读流
var readerStream = fs.createReadStream('input.txt');
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});