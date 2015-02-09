var gulp = require ('gulp');

gulp.task('watch', ['default'], function () {

    var browserSync = require('browser-sync'),
    reload = browserSync.reload,
    paths = {
        dist: 'dist',
        srcHtml: 'src/js/**/*.html',
        srcScripts: 'src/js/**/*.js',
        srcScriptsLint: [
        'gulpfile.js',
        'tasks/*.js',
        'src/js/**/*.js'
    ]};

    // start browser sync server
    browserSync({
      open: false,
      server: {
        baseDir: paths.dist
      }
    });

    // watch src gulp tasks and trigger reload
    gulp.watch(paths.srcHtml, {interval: 500}, ['html', 'html:lint']);
    gulp.watch(paths.srcScripts, {interval: 500}, ['scripts']);
    gulp.watch(paths.srcScriptsLint, {interval: 500}, ['scripts:lint']);

});
