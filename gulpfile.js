const gulp = require('gulp')
const connect = require('gulp-connect')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const sass = require('gulp-sass')

function styles () {
  return gulp.src('./src/scss/style.scss')
    .pipe(sass({ outputStyle: 'expanded', precision: 10 }).on('error', handleError))
    .pipe(gulp.dest('./dest/css'))
}

function js () {
  return gulp.src(['./src/js/util.js', './src/js/layer.js', './src/js/snake.js', './src/js/point.js', './src/js/script.js'])
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dest/js'))
    .pipe(connect.reload())
}

function server (done) {
  connect.server({
    port: 9000,
    root: './',
    livereload: true
  })
  done()
}

function watch (done) {
  const files = ['./src/**', './index.html']
  gulp.watch(files, gulp.series('build'))
  done()
}

function handleError (error) {
  console.log(error)
}

gulp.task('build', gulp.series(styles, js))
gulp.task('default', gulp.series('build', server, watch))
