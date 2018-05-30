const commonConfig = require('./webpack.config.common');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  
  mode: 'production',

  plugins: [
    new FaviconsWebpackPlugin({
      logo: './favicon.png',
      emitStats: true,
      prefix: 'icons/',
      statsFilename: 'icons/stats.json',
      inject: true,
      title: 'Project Evergreen',
      background: '#1d337a',
      icons: {
        android: true,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: false,
        windows: false
      }
    })
  ]
  
});