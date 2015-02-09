var gulp = require ('gulp'),
    connect = require('gulp-connect'),
    protractor = require('gulp-protractor').protractor;

gulp.task('func-tests', function (cb) {

    var paths = {
        src: 'tests/js/functional/**/*.js',
        dist: 'dist'
    };

    connect.server({
        root: paths.dist,
        port: protractorPort
    });

    gulp.src(paths.src)
        .pipe(protractor({
            configFile: protractorConfigFile,
            args: ['--baseUrl', protractorURL + protractorPort]
        }))
        .on('end', function () {
            // Exits the task and shuts down
            // the server (connect.serverClose())
            process.emit('exit');
        })
        .on('error', function (e) {
            throw e;
        });

});
