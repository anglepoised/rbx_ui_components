var gulp = require ('gulp'),
    gulpIf = require('gulp-if'),
    ngAnnotate = require('gulp-ng-annotate'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

/** **************************************************
 *
 * Dist scripts task
 *
 * Packs angular libraries and project JS libraries
 * into a main.js file.
 * Takes care of angular DI annotation
 * Minifies the main.js file when Release
 *
 ** *********************************************** */

gulp.task('scripts:dist', function (cb) {

    var jsFiles = ['src/js/directives/**/*.js',
            '!src/js/directives/**/*.spec.js'],
        paths = {
            dest: 'dist'
        };

    return gulp.src(jsFiles)
        .pipe(ngAnnotate({'single_quotes': true}))
        .pipe(gulpIf(isRelease, uglify()))
        .pipe(concat('directives.js'))
        .pipe(gulp.dest(paths.dest));

});
