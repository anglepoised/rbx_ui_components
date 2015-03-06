var gulp = require ('gulp'),
    htmlmin = require('gulp-htmlmin'),
    templateCache = require('gulp-angular-templatecache');

/** *****************************************************
 *
 * HTML templates task
 *
 * Precompiles AngularJS templates with $templateCache
 *
 ** ************************************************** */

gulp.task('templates:dist', function (cb) {

    var templateFiles = ['src/js/directives/**/*.tpl.html'],
        paths = {
            dest: 'dist/templates'
        };

    return gulp.src(templateFiles)
        .pipe(htmlmin({collapseWhitespace: true, preserveLineBreaks: false}))
        .pipe(templateCache('templates.js', {module: 'templates', standalone: true}))
        .pipe(gulp.dest(paths.dest));

});
