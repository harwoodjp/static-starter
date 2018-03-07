const path = require("path")

console.log(path.join(__dirname, './'))

module.exports = {
  entry: path.resolve(__dirname, "./static/js/app.js"),
  output: {
    path: path.join(__dirname, './static/'),
    publicPath: "/static",
    filename: 'app.bundle.js',
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