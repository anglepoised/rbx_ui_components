var gulp = require ('gulp');

gulp.task('raw', function (done) {
    paths = {
      src: ['src/js/**/*.js'],
      dest: 'dist/js'
    };

    return gulp.src(paths.src)
      .pipe(gulp.dest(paths.dest));
});
