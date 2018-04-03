const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "./public/js/app.js"),
  output: {
    path: path.join(__dirname, './public/'),
    publicPath: "/public",
    filename: 'dist/app.bundle.js',
  },

  watch: true,

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader",
        query: {
          presets: ['@babel/preset-env']
        }
      },
    ]
  },

  module: {
      rules: [{
          test: [/\.css$/, /\.scss$/, /\.sass$/],
          use: [{
              loader: "style-loader"
          }, {
              loader: "css-loader"
          }, {
              loader: "sass-loader",
          }]
      }]
  },

  devServer: {
    contentBase: path.join(__dirname, './'),
    compress: true,
    port: 1776
  }  
}