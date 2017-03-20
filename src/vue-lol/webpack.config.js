var webpack = require('webpack');

module.exports = {
  devtool:"eval-source-map",
  entry: __dirname+"/main.js",//入口
  output: {
    path: __dirname+"/public",
    filename: 'base.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.vue$/, loader: 'vue-loader'},
      {test: /\.(png|jpg)$/,loader: 'url-loader?limit=8192'}
    ]
  },
  resolve:{
    alias:{
      vue:'vue/dist/vue.js'
      // 'muse-components': 'muse-ui/src'
    }
  },
  devServer:{
    contentBase:"./public",
    inline:true,
    port:3333
  },
  
}