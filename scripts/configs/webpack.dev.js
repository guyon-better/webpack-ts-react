const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const { SERVER_HOST, SERVER_PORT } = require('../consts');
const paths = require('../paths');
const proxySetting = require('../utils/setProxy');

module.exports = merge(common, {
  mode: 'development',
  target: 'web',
  plugins: [new Webpack.HotModuleReplacementPlugin(), new ErrorOverlayPlugin()],
  devtool: 'inline-source-map',
  devServer: {
    host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
    port: SERVER_PORT, // 指定端口，默认是8080
    stats: 'errors-only', // 终端仅打印 error
    clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    proxy: { ...proxySetting },
  },
  optimization: {
    minimize: false,
    minimizer: [],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
    },
  },
});
