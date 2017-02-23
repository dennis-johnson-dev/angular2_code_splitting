const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public/js'),
    publicPath: '/js/'
  },
  resolve: {
    extensions: [".ts", ".js", ".html"]
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /.ts$/,
        loader: 'babel-loader!ts-loader'
      },
      {
        test: /.css$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'node_modules/babel-polyfill/dist/polyfill.min.js'
      }
    ])
  ]
};
