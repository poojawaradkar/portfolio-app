const path = require('path');
const { merge } = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

const common = require('./webpack.common.js');

/**
 * Don't remove below mentioned package. This is used for extracting .env.production file
 * varibales values into process.env in webpack config file.
 */
require('dotenv').config({
  path: path.resolve(__dirname, '.env.production')
});

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash:8].js',
    publicPath: '/portfolio-app',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
    new HtmlWebpackPlugin({
      title: 'Portfolio App',
      template: './public/index.prod.html',
      // Inline all files which names start with “runtime~” and end with “.js”.
      // That’s the default naming of runtime chunks
      inlineSource: 'runtime.+\\.js',
      scriptLoading: 'defer',
      inject: 'body'
    }),
    // This plugin enables the “inlineSource” option
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[id].[contenthash:8].css'
    }),
    new GenerateSW({
      sourcemap: false,
      swDest: path.resolve(__dirname, 'build/sw.js'),
      include: [/.css$/, /.js$/]
    }),

  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
    /**
     * Adding runtime chunk so it will create a runtime config file and not include
     * runtime config into main.js file for better caching. This file is very lightweight ~2kb
     * so downloading with each build will not give any much stress to load time because if
     * our main.js was not cahnged which is in size of ~200kb then it was automatically be served
     * from cache(service-worker/disk cache).
     * https://webpack.js.org/guides/caching/#extracting-boilerplate
     * https://developers.google.com/web/fundamentals/performance/webpack/use-long-term-caching
     */
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      name: false,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/][\\/]/,
          name: 'vendor'
        },
        styles: {
          name: 'main',
          test: function stylesTestRegex(module) {
            return /\.(css|scss)$/.test(module.constructor.name) || /(\.module)/.test(module.constructor.name);
          },
          maxAsyncRequests: 1,
          chunks: 'all',
          minChunks: Infinity,
          enforce: true
        }
      }
    }
  },
});
