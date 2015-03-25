var gulp = require ('gulp');

gulp.task('clean', function (cb) {

    var del = require('del'),
        paths = {
            dist: 'dist',
            dev: 'dev'
        };

    del(['paths.dist', 'paths.dev'], cb);
});
