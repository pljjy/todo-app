const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devServer: {
    static: './dist'
  },
  optimization: {
    runtimeChunk: 'single',
  },
  cache: false,
  'mode': 'development'
});

