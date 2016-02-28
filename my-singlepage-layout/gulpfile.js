'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'src'
    }
  });

  gulp.watch(['./src/*.html', './src/css/*.css'], browserSync.reload);
});
