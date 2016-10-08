const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.npm_config_ENV;

let config = {
  entry : [join(__dirname, './app/index.js')],
  output : {
    path : join(__dirname, './dist'),
    filename : 'main.js'
  },
  module : {
    loaders : [
      {
        test : /\.js$/,
        loader:'babel?presets[]=es2015&presets[]=react'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title : 'React Components Life Cycle',
    template : join(__dirname, './app/app.html')
  })]
};

if(ENV === 'development'){
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}else if(ENV === 'production'){
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        }));
}

module.exports = config;
