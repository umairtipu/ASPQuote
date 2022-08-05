var path = require('path')

var webpack = require('webpack')

module.exports = {

  entry: './src/main.js',

  output: {

    path: path.resolve(__dirname, './dist'),

    publicPath: '/dist/',

    filename: 'build.js'

  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file) &&
                !/\.vue\.js/.test(file)
        )
      }
    ]
  }
  // plugin omitted
}
