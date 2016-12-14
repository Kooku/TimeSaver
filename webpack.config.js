// In webpack.config.js
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'popup.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/scripts/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "popup.js"
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader"
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};