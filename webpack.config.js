var path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public/js'),
    publicPath: '/js/'
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /.ts$/,
        loader: 'babel!ts-loader!angular2-load-children-loader'
      },
      {
        test: /.scss$/,
        loader: 'style!css!sass-loader'
      },
      {
        test: /^s.css$/,
        loader: 'style!css'
      }
    ]
  }
};
