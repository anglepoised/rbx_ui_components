var gulp = require ('gulp');

/** **********************
*
* HTML linting task
*
** ******************** */
gulp.task('html:lint', function () {

    var cached = require('gulp-cached'),
        htmlhint = require('gulp-htmlhint'),
        paths = {
            src: 'dev/**/*.html'
    };

    return gulp.src(paths.src)
        .pipe(cached('html'))
        .pipe(htmlhint())
        .on('error', function (err) {
            console.log(err.message);
            this.emit('end');
        })
        .pipe(htmlhint.reporter());

});
