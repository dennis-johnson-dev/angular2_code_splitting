var path = require('path');

module.exports = function() {
  return {
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, './public/js'),
      filename: 'bundle.js'
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
        }
      ]
    }
  };
}
