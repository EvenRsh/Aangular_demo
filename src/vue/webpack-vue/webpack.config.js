var webpack = require('webpack');

module.exports = {
  devtool:"source-map",
  entry: './index.js',//入口
  output: {
    path: __dirname+"/public",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.vue$/, loader: 'vue-loader'}
    ]
  },
  resolve:{
    alias:{
      vue:'vue/dist/vue.js'
    }
  },
  devServer:{
    contentBase:"./public",
    inline:true,
    port:3333
  },
  
}