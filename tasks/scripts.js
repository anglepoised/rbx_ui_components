var gulp = require ('gulp');

gulp.task('scripts', function () {

    var gulpIf = require('gulp-if'),
        uglify = require('gulp-uglify'),
        ngAnnotate = require('gulp-ng-annotate'),
        rename = require('gulp-rename'),

        paths = {
            src: ['src/js/**/*.js',
                  '!src/js/**/*.spec.js'
                ],
            dest: 'dist/js'
        };

    return gulp.src(paths.src)
      .pipe(ngAnnotate({'single_quotes': true}))
      .pipe(gulpIf(isRelease, rename(function (path) {
          if (path.extname === '.js') {
              path.basename += '.min';
          }
      })))
      .pipe(gulpIf(isRelease, uglify()))
      .pipe(gulp.dest(paths.dest));

});
