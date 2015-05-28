var webpack = require('webpack'),
    webpackConfig = require('./webpack.base.config.js');

// Generate with source maps
webpackConfig.devtool = 'inline-source-map';
// Don't build from entry (Will automatically load every file in otherwise - means coverage is useless)
webpackConfig.entry = {};
webpackConfig.module = webpackConfig.module || {};
// Use the istanbul-instrumenter loader to be able to gather coverage reports from webpack.
webpackConfig.module.postLoaders = [{
    test: /\.js$/,
    exclude: /(test|node_modules|vendor)\//,
    loader: 'istanbul-instrumenter'
}];

module.exports = function (config) {
    config.set({
        files: [
            'vendor/angular/angular.js',
            'vendor/angular-mocks/angular-mocks.js',
            'test/unit/**/*.spec.js'
        ],
        exclude: [],
        browsers: [
            'PhantomJS'
        ],
        frameworks: [
            'jasmine'
        ],
        preprocessors: {
            'test/unit/**/*.spec.js': [
                'webpack',
                'sourcemap'
            ]
        },
        port: 9876,
        runnerPort: 9100,
        autoWatch: true,
        captureTimeout: 60000,
        // to avoid DISCONNECTED messages
        browserDisconnectTimeout: 10000, // default 2000
        browserDisconnectTolerance: 1, // default 0
        browserNoActivityTimeout: 60000, //default 10000
        singleRun: true,
        webpack: webpackConfig
    });
};
