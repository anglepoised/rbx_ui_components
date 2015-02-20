// Karma configuration

module.exports = function(config) {
  config.set({
        basePath: './',
        // list of files / patterns to load in the browser
        files: [
            'vendor/angular/angular.js',
            'vendor/angular-mocks/angular-mocks.js',
            'src/**/*.js',
            'src/**/*.spec.js',
            'tests/js/unit/**/*.js'
        ],
        exclude: [],
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        port: 9876,
        runnerPort: 9100,
        autoWatch: true,
        captureTimeout: 60000,
        singleRun: true,
    });
};
