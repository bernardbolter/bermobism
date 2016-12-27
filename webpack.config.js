const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './source/gateway.js',
  output: {
    path: __dirname,
    filename: 'mashup.js'
  },
  module: {
    loaders: [
      {
        test: /\.(css|scss)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass'),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-runtime', 'transform-async-to-generator', 'transform-decorators-legacy']
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true,
    })
  ],
};
