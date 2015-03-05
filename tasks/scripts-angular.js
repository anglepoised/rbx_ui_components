var gulp = require ('gulp'),
    gulpIf = require('gulp-if'),
    ngAnnotate = require('gulp-ng-annotate'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

/** **************************************************
 *
 * Angular scripts task
 *
 * Packs angular libraries and project JS libraries
 * into a main.js file.
 * Takes care of angular DI annotation
 * Minifies the main.js file when Release
 *
 ** *********************************************** */

gulp.task('scripts:angular', ['templates:dist'], function (cb) {

    var angularModule = ['vendor/angular/angular.js'],
        vendorFiles = ['vendor/angular-animate/angular-animate.js',
                       'vendor/angular-aria/angular-aria.js',
                       'vendor/ng-lodash/build/ng-lodash.js',
                       'vendor/highlightjs/highlight.pack.js',
                       'vendor/angular-highlightjs/angular-highlightjs.js'],
        jsFiles = ['src/js/**/*.js',
            '!src/js/**/*.spec.js',
            '!src/js/app.js'],
        paths = {
            dest: 'dist/js'
        };

    return gulp.src(angularModule.concat(vendorFiles).concat(jsFiles))
        .pipe(ngAnnotate({'single_quotes': true}))
        .pipe(gulpIf(isRelease, uglify()))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.dest));

});
