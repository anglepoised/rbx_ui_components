// Karma configuration

module.exports = function (config) {
    config.set({
        basePath: './',
        preprocessors: {
            '**/*.tpl.html': ['ng-html2js']
        },
        // list of files / patterns to load in the browser
        files: [
            'vendor/angular/angular.js',
            'vendor/angular-mocks/angular-mocks.js',
            'src/**/*.js',
            'src/**/*.spec.js',
            'tests/js/unit/**/*.js',
            '**/*.tpl.html'
        ],

        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/js/directives/'
        },
        exclude: [],
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        plugins: ['karma-phantomjs-launcher',
            'karma-ng-html2js-preprocessor',
            'karma-jasmine'
        ],
        port: 9876,
        runnerPort: 9100,
        autoWatch: true,
        captureTimeout: 60000,
        singleRun: true
    });
};
