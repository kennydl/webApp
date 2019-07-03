const path = require('path');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');
const merge = require('webpack-merge');
const htmlPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const webpackFolder = 'public';
const APP_DIR = path.resolve(__dirname, 'src');

module.exports = env => {
  const isDevBuild = !(env && env.prod);
  // const envFile = dotenv.config().parsed;
  // const backendPath = envFile.BACKEND_PATH;
  // delete envFile.BACKEND_PATH;
  // const envKeys = Object.keys(envFile).reduce((acc, current) => {
  //   acc[`process.env.${current}`] = JSON.stringify(envFile[current]);
  //   return acc;
  // }, {});

  const sharedConfig = {
    entry: ['@babel/polyfill', 'index.js'],
    stats: {
      modules: false
    },
    output: isDevBuild
      ? {
        path: path.join(__dirname, webpackFolder), // Output to the backend folder!
        filename: 'js/bundle.js',
        publicPath: '/' + webpackFolder + '/'
      }
      : {
        path: __dirname + '/build', // Output to the backend folder!
        filename: 'js/bundle.js',
        publicPath: '/' + webpackFolder + '/'
      },
    context: path.resolve(__dirname, webpackFolder),
    resolve: {
      modules: [APP_DIR, 'node_modules'],
      extensions: ['.ts', '.js', '.jsx', '.tsx', '.css']
    },
    devServer: isDevBuild
      ? {
        historyApiFallback: true,
        historyApiFallback: {
          // index: webpackOutput + '/index.html'
          index: '/public/index.html'
        },
        proxy: {
          '/api': 'http://localhost:5471'
        }
      }
      : {},
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.jsx$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.tsx$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: 'url-loader?limit=25000'
        },
        {
          test: /^((?!custom).)*\.css$/,
          loaders: [
            'style-loader?sourceMap',
            'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
          ]
        },
        {
          test: /custom\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: `/${webpackFolder}/`
              }
            },
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    // plugins: [
    //   new webpack.DefinePlugin(envKeys),
    //   new MiniCssExtractPlugin({
    //     filename: 'css/my.custom.css'
    //   }),
    //   new htmlPlugin({
    //     filename: 'index.html',
    //     template: 'index.html'
    //     // title: 'Get Started With Workbox For Webpack'
    //   }),
    //   new WorkboxPlugin.GenerateSW({
    //     swDest: 'sw.js',
    //     clientsClaim: true,
    //     skipWaiting: true,

    //     // Exclude images from the precache
    //     exclude: [/\.(?:png|jpg|jpeg|svg)$/],

    //     // Define runtime caching rules.
    //     runtimeCaching: [
    //       {
    //         // Match any request ends with .png, .jpg, .jpeg or .svg.
    //         urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

    //         // Apply a cache-first strategy.
    //         handler: 'cacheFirst',

    //         options: {
    //           // Use a custom cache name.
    //           cacheName: 'cache-images',

    //           // Only cache 10 images.
    //           expiration: {
    //             maxEntries: 10
    //           }
    //         }
    //       }
    //     ]
    //   })
    // ]
  };

  return [sharedConfig];
};
