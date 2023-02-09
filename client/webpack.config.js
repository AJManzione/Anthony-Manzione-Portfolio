const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Require the GenerateSW class of the WorkBoxPlugin 
const WorkboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: 
    './src/index.js',
    'project-one': './src/js/project-one.js',
    'project-two': './src/js/project-two.js',
    'project-three': './src/js/project-three.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Webpack Plugin',
      filename: 'index.html',
      chunks: ['index'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './project-one.html',
      title: 'Webpack Plugin',
      filename: 'project-one.html',
      chunks: ['project-one'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './project-two.html',
      title: 'Webpack Plugin',
      filename: 'project-two.html',
      chunks: ['project-two'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      template: './project-three.html',
      title: 'Webpack Plugin',
      filename: 'project-three.html',
      chunks: ['project-three'],
      inject: 'body'
    }),
    new MiniCssExtractPlugin(),
    new WorkboxPlugin.GenerateSW({
      maximumFileSizeToCacheInBytes: 1000000000
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
