var path = require('path');

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
  }
};
