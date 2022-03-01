const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');

const filename = path.resolve(__dirname, 'build');

const IS_PROD_BUILD = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging';

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    new CleanWebpackPlugin(),

    new LoadableWebpackPlugin({
      outputAsset: false,
      writeToDisk: { filename },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.module\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: IS_PROD_BUILD ? '[hash:base64:5]' : '[folder]-[name]__[local]',
              },
            },
          },
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          'postcss-loader'
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            publicPath: '/portfolio-app/assets/images/',
            outputPath: 'assets/images/',
            name: '[name].[hash:8].[ext]',
            emitFile: true,
          }
        }
      },
      {
        test: /\.svg$/,
        include: [
          path.resolve(__dirname, 'src/assets/icons')
        ],
        issuer: {
          test: /\.js?$/
        },
        use: [{
          loader: '@svgr/webpack',
          options: {
            icon: true,
          }
        }, 'url-loader'],
      },
      {
        test: /\.svg$/,
        exclude: [
          path.resolve(__dirname, 'src/assets/icons')
        ],
        use: {
          loader: 'file-loader',
          options: {
            esModule: false,
            publicPath: '/assets/images/',
            outputPath: 'assets/images/',
            name: '[name].[hash:8].[ext]',
            emitFile: true,
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[hash:8].[ext]',
            esModule: false
          }
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
};
