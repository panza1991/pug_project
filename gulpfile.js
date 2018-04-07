var gulp = require('gulp'),
    connect = require('gulp-connect');
var pug = require('gulp-pug');

gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: 8000,
    base: 'http://localhost',
    livereload: true
  });
});

gulp.task('pug', function() {
    gulp.src('./src/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
})


gulp.task('watch', function(){
    gulp.watch('./src/*pug', ['pug'])
});

gulp.task('default', ['connect', 'watch', 'pug'])