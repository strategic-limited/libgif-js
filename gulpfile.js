var gulp = require('gulp'),
  $ = require('gulp-load-plugins')();

gulp.task('connect', function () {
  $.connect.server({
    root: [__dirname],
    port: 1983,
    livereload: {port: 2983}
  })
});
