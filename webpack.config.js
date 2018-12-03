const webpack = require('webpack');
const merge = require('webpack-merge');
const pathResolve = require('path').resolve;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ClosureCompiler = require('google-closure-compiler-js').webpack;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const package = require('./package.json');
const libraryName = package.name.toLowerCase().replace(/(\b|-)\w/g, (m) => m.toUpperCase().replace(/-/, ''));
const pathSrc = pathResolve('./src');
const pathNodeModules = pathResolve('./node_modules');

// Webpack entry and output settings
const entry = {};
entry[package.name] = './src/utils.js';
entry['example'] = './src/Example.jsx';

// Webpack config
const mode = 'production';
const name = 'production.config';
const filename = `[name].production.min`;
const filenameJS = `${filename}.js`;

const output = {
  path: pathResolve(__dirname, `build/node_modules/${package.name}`),
  publicPath: '/',
  filename: filenameJS,
  chunkFilename: filenameJS,
  library: libraryName,
  libraryTarget: 'umd',
  umdNamedDefine: true,
  jsonpFunction: `${libraryName}OnDemand`
};

// Babel support for ES6+
const babelLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
};

// Resolve extenstions for JS and JSX
const resolve = {
  extensions: ['*', '.js', '.jsx'],
  modules: [
    pathSrc,
    pathNodeModules
  ]
};

// Use React as external library from CDN
const externals = {
  react: {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
    umd: 'react'
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom',
    umd: 'react-dom'
  }
};

// Webpack Plugins:
// Clean build folder
const cleanBuildPlugin = new CleanWebpackPlugin(['build']);

// Google Closure compiler instead of uglify
const googleClosureCompiler = new ClosureCompiler({
  options: {
    compilationLevel: 'SIMPLE',
    languageIn: 'ECMASCRIPT5_STRICT',
    languageOut: 'ECMASCRIPT5_STRICT',
    warningLevel: 'QUIET',
    applyInputSourceMaps: false,
    useTypesForOptimization: false,
    processCommonJsModules: false,
    rewritePolyfills: false
  }
});

// NPM settings
const npmIndexJSPlugin = new CopyWebpackPlugin([{
  from: './npm/index.tpl',
  to: `index.js`,
  transform(content) {
    return content.toString().replace(/__COMPONENT_NAME__/g, package.name);
  }
}]);

const npmReadmePlugin = new CopyWebpackPlugin([{
  from: './npm/README.tpl',
  to: `README.md`,
  transform(content) {
    return content.toString().replace(/__COMPONENT_NAME__/g, package.name);
  }
}]);

const npmPackagePlugin = new CopyWebpackPlugin([{
  from: './npm/package.tpl',
  to: `package.json`,
  transform(content) {
    return content.toString()
      .replace(/__COMPONENT_NAME__/g, package.name)
      .replace(/__VERSION__/g, package.version)
      .replace(/__DESCRIPTION__/g, package.description)
      .replace(/__REACT_VERSION__/g, package.dependencies['react'])
      .replace(/__REACT_DOM_VERSION__/g, package.dependencies['react-dom']);
  }
}]);

// License
const npmLicencePlugin = new CopyWebpackPlugin([{
  from: './LICENSE'
}]);

// Copyright
const copyright = `
@license ${package.name} v${package.version} ${new Date().toISOString().split('T')[0]}
[file]

Copyright (c) 2018-present, Rakuten, Inc.

This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.`;

const bannerPlugin = new webpack.BannerPlugin({
  banner: copyright
});

// Webpack common config
const webpackConfig = {
  mode: mode,
  name: name,
  entry: entry,
  output: output,
  module: {
    rules: [
      babelLoader
    ]
  },
  resolve: resolve,
  externals: externals,
  plugins: [
    bannerPlugin
  ],
  optimization: {
    concatenateModules: true,
    minimize: true,
    minimizer: [
      googleClosureCompiler
    ],
    splitChunks: {
      chunks: 'all',
      name: true,
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          priority: 2,
          reuseExistingChunk: true
        },
      }
    }
  }
};

// Webpack production config for NPM
const production = merge(
  webpackConfig, {
    plugins: [
      cleanBuildPlugin,
      npmIndexJSPlugin,
      npmReadmePlugin,
      npmPackagePlugin,
      npmLicencePlugin
    ],
  }
);

// Webpack development config for NPM
const modeDev = 'development';
const nameDev = 'development.config';
const filenameDev = `[name].development`;
const filenameJSDev = `${filenameDev}.js`;
const outputDev = {
  filename: filenameJSDev,
  chunkFilename: filenameJSDev,
};

const development = merge(
  webpackConfig, {
    mode: modeDev,
    name: nameDev,
    output: outputDev,
    externals: externals,
    plugins: [],
    optimization: {
      minimize: false
    }
  }
);

// Webpack export config
module.exports = [
  production,
  development
];