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
        loader: 'babel!ts-loader'
      },
      {
        test: /.css$/,
        loader: 'style!css!sass-loader'
      }
    ]
  }
};
