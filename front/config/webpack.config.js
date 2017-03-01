const webpack = require('webpack');

// remember we installed this at the beginning? Now we're using it.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Okay, this may be confusing at first glance but go through it step-by-step
module.exports = env => {
  return {
     // entry tells webpack where to start looking.
    entry: {
      app: path.join(__dirname, '../src/app.js'),
      vendor: ['react', 'react-dom', 'react-router'],
    },
    /**
     * output tells webpack where to dump the files it has processed.
     * [name].[hash].js will output something like app.3531f6aad069a0e8dc0e.js
     */
    output: {
      filename: '[name].[hash].js',
      path: path.join(__dirname, '../dist/'),
    },

    module: {
      rules: [{
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      }, {
          test: /\.s[ac]ss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
      }]
    },

    plugins: [
      // used to split out our sepcified vendor script
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].[hash].js',
      }),

      /**
      * HtmlWebpackPlugin will make sure out JavaScript files are being called
      * from within our index.html
      */
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),
    ],
  };
};