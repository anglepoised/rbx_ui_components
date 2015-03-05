var gulp = require ('gulp');

/** **********************
*
* HTML minification task
*
** ******************** */
gulp.task('html', function () {

    var gulpIf = require('gulp-if'),
        minifyHTML = require('gulp-minify-html'),
        paths = {
            src: 'src/**/*.html',
            dest: 'dist'
        };

    return gulp.src(paths.src)
        .pipe(gulpIf(isRelease, minifyHTML({
            comments: true,
            quotes: true
        })))
        .pipe(gulp.dest(paths.dest));

});
