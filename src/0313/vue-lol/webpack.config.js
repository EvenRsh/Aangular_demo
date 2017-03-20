//引入webpack模块
//npm install webpack
var webpack = require("webpack");
module.exports = {
	//用于调试代码
	devtool: 'source-map',
	//入口文件 __dirname当前脚本的路径
	entry: __dirname + '/main.js',
	output: {
		//输出文件所在的文件夹
		path: __dirname + '/public',
		//webpack处理后文件输出的名字
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		},{
			test: /\.html$/,
			//这个是用来处理html
			loader: 'html-loader'
		},{
			test: /\.vue$/,
			//npm install vue-loader vue-template-compiler
			//这两个是用来解析vue组件
			loader: 'vue-loader'//vue-template-compiler
		},{
			test: /\.less$/,
			loader: 'less-loader'//vue-template-compiler
		}]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	//配置webpack-dev-server
	//cnpm install webpack-dev-server
	devServer: {
		contentBase: "./public", //本地服务器的文件夹
		inline: true, //自动刷新
		//0~65535 iis 80 http-server 8080 3000
		port: 22222,
	}
}