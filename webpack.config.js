var path = require('path');

module.exports = function() {
  return {
    entry: './src/index',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './public/js'),
      publicPath: '/js/'
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    progress: true,
    devtool: 'sourcemap',
    module: {
      loaders: [
        {
          test: /.ts$/,
          loader: 'babel!ts-loader'
        },
        {
          test: /.scss$/,
          loader: 'style!css!sass-loader'
        }
      ]
    }
  };
}
