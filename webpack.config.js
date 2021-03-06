const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const modeEnv = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: modeEnv,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[hash].js',
    publicPath: '/',
    // assetModuleFilename:'images/[hash]'
  },
  devtool: modeEnv === 'development' ? 'source-map' : false,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
    historyApiFallback: true,
    port: 5000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(gif|svg|jpe?g||png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: false,
            },
          },
        ],
        // type:'asset/resource'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './base.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
