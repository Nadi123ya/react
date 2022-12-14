const path = require('path');
const HtmlWebpackPlugins = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'review_build'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ["babel-loader"]
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugins({
      template: './src/index.html'
    })
  ]
};