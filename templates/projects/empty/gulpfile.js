/*
  This file in the main entry point for defining Gulp tasks and using Gulp plugins.
  Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
'use strict';

var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('copy', function() {
    gulp.src(['./**/*.{js,html,map}','!./wwwroot/**/*','!./node_modules/**/*','!./jspm_modules/**/*'])
        .pipe(gulp.dest('./wwwroot'));
});
