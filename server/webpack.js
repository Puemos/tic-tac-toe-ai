const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const configDev = require('./../webpack.dev.config');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const root = '../client';
const paths = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, root, 'app/app.js')
  ],
  output: root,
  dest: path.join(__dirname, 'dist')
};

const config = configDev;
config.entry.app = ['webpack-hot-middleware/client?reload=true', ...paths.entry];
const create_compiler = () => {
  const compiler = webpack(config);
  compiler.apply(new ProgressBarPlugin());
  return compiler;
};
const create_middleware = compiler => webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

module.exports = {
  create_middleware,
  create_compiler
};
