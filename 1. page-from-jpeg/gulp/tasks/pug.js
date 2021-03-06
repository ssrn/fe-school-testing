let pug             = require('gulp-pug'),
    data            = require('gulp-data'),
    fs              = require('fs');

module.exports = function () {
    $.gulp.task('pug', () => {
        return $.gulp.src('./src/pug/*.pug')
            .pipe(pug({
                pretty: true
            }))
            .pipe($.gulp.dest('./build/'))
            .pipe($.browserSync.stream());
    });
};
