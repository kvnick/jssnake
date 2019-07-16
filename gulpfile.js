const gulp = require('gulp'),
      connect = require('gulp-connect');

function server(cb) {
    connect.server({
        port: 9000,
        root: './',
    });

    cb();
}

function watch() {
    let files = ['./lib/**', './index.html', './script.js'];
    return gulp.watch(files, gulp.series(server));
}

gulp.task('default', gulp.series(server, watch));

