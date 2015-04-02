var webpack = require('webpack'),
    config = require('./webpack.base.config.js');

config.plugins.push(new webpack.ProvidePlugin({
    'angular': 'exports?window.angular!angular/angular'
}));

module.exports = config;
