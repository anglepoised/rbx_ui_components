var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    config = require('./webpack.base.config.js');

config.plugins.push(new webpack.ProvidePlugin({
    'angular': 'exports?window.angular!angular/angular'
}));

config.plugins.push(new HtmlWebpackPlugin({
    template: 'dev/index.html'
}));

module.exports = config;
