const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const { join } = require('path');

const PORT = process.env.npm_config_PORT;

var config = require("./webpack.config.js");
config.entry.unshift(`webpack-dev-server/client?http://localhost:${PORT}/`, "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  hot: true,
  contentBase : join(__dirname, './dist')
});

server.listen(PORT);
