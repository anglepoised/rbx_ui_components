var gulp = require ('gulp'),
    gulpIf = require('gulp-if'),
    ngAnnotate = require('gulp-ng-annotate'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('scripts:angular', function (cb) {

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
