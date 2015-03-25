var gulp = require ('gulp');

gulp.task('raw', function (done) {
    paths = {
      src: ['src/js/**/*.js',
          '!src/js/**/*.spec.js',
          '!src/js/**/*.tpl.html'
      ],
      dest: 'dev/js'
    };

    return gulp.src(paths.src)
        .pipe(gulp.dest(paths.dest));
});
