const webpack = require('webpack')
module.exports = {
  entry: {
    app: './_js/index.jsx'
  },
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
