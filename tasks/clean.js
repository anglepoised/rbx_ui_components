var gulp = require ('gulp');

gulp.task('clean', function (cb) {

    var del = require('del'),
        paths = {
            dist: 'dist'
        };

    del(paths.dist, cb);
});
