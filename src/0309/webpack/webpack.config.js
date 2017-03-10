//require() 引入模块 require()
//exports或 module.exports 导出模块 define()
//var yao = require('./index.js');
//import yao from './index.js'
//var add = require('./home.js');
//console.log(yao)

//1.npm install webpack -g
//全局环境C:\Users\Administrator\AppData\Roaming\npm下的
//2.在根目录下，创建一个public目录，在里面新建一个静态页面index.html
//http://webpackdoc.com/usage.html
//3.新建一个webpack.config.js，这个webpack配置文件，相当于gulpfile.js
//4.配置webpack.config.js 如下代码配置

var webpack = require('webpack')

module.exports = {
	entry: './index.js', //入口文件
	//出口文件
	output: {
		path: __dirname + "/public", //在本地目录下的public文件夹下导出一个名为bundle.js
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}]
	}
}