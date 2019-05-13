const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./demo/index.html",
  filename: "./index.html",
  excludeChunks: ['main']
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  entry: {
    demo: path.resolve(__dirname, 'demo'),
    main: path.resolve(__dirname, 'src')
  },
  plugins: [htmlPlugin],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    modules: [path.resolve(__dirname, 'demo'), 'node_modules']
  }
};
