'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var ENV = process.env.NODE_ENV;
var IS_PRODUCTION = ENV === 'production';
var VERSION = JSON.stringify(require('./package.json').version);

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

let webpackConfig = {

  context: root(),

  devtool: IS_PRODUCTION ?
    'hidden-source-map' :
    'source-map',

  entry: {
    app: './src/bootstrap.js',
    vendor: './src/vendor.js',
    polyfills: './src/polyfills.js'
  },

  output: {
    path: root('dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    historyApiFallback: true,
    port: 9999,
    stats: {
      modules: false,
      cached: false,
      chunk: false
    }
  },

  performance: {
    hints: false
  },

  resolve: {
    extensions: ['.js', '.html'],
    descriptionFiles: ['package.json'],
    modules: [
      root('src'),
      'node_modules'
    ],
    alias: {
      // 'angular-ui-router': 'angular-ui-router/release/angular-ui-router.js',
      // 'ui-router-ng2': 'ui-router-ng2/_bundles/ui-router-ng2.js',
      // 'ui-router-ng1-to-ng2': 'ui-router-ng1-to-ng2/ng1-to-ng2.js'
    }
  },

  module: {
    exprContextCritical: false,
    rules: [
      // {
        // enforce: 'pre',
        // test: /\.js$/,
        // loader: 'source-map-loader'
      // },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'polyfills'],
      minChunks: Infinity
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency',
      title: 'Demo'
    }),

    new CleanWebpackPlugin(['dist'], {
      root: root(),
      verbose: false,
      dry: false
    }),

    new webpack.DefinePlugin({
      'ENV': JSON.stringify(ENV),
      'IS_PRODUCTION': IS_PRODUCTION,
      'VERSION': VERSION
    }),

    // https://github.com/angular/angular/issues/11580#issuecomment-246880731
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('src') // location of your src
    ),

    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
};

if(IS_PRODUCTION) {

  config.plugins.push(new webpack.optimize.DedupePlugin());

  config.plugins.push(new webpack.NoErrorsPlugin());

  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    // beautify: true, //debug
    // mangle: false, //debug
    // dead_code: false, //debug
    // unused: false, //debug
    // deadCode: false, //debug
    // compress: {
    //   screw_ie8: true,
    //   keep_fnames: true,
    //   drop_debugger: false,
    //   dead_code: false,
    //   unused: false
    // }, // debug
    // comments: true, //debug
    beautify: false, //prod
    mangle: false, //prod
    //mangle: { screw_ie8 : true }, //prod
    compress: { screw_ie8: true }, //prod
    comments: false //prod
  }));
}

module.exports = webpackConfig;
