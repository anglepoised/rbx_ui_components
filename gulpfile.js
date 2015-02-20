// dependencies
var gulp = require('gulp'),
    karma = require('karma').server,
    runSequence = require('run-sequence'),
    args = require('yargs').argv;
// arguments
isRelease = args.release;
// global variables
protractorConfigFile = 'protractor-func.conf.js';
protractorURL = 'http://localhost:';
protractorPort = '3000';

// load specific tasks
require('require-dir')('tasks');

gulp.task('test', function (cb) {

    runSequence([
        'raw',
        'html',
        'scripts',
        'scripts:angular',
        'scripts:lint',
        'html:lint',
        'unit-tests',
        'func-tests'
      ], cb);
});

/** *********************
*
* Task for Karma tests
*
** ******************* */
gulp.task('unit-tests', function (done) {
    karma.start({
        configFile: __dirname + '/karma-src.conf.js',
        singleRun: true
    }, done);
});

// default task
gulp.task('default', ['clean'], function (cb) {

    runSequence([
        'scripts:lint',
        'raw'
    ], [
        'html',
        'scripts',
        'scripts:angular',
        'unit-tests'
    ],
    ['html:lint'], cb);

});
