module.exports = function() {
  return {
    entry: './src/index.ts',
    output: {
      path: __dirname + './public/js',
      filename: 'bundle.js'
    },
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
