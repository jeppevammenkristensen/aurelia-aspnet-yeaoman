/*
  This file in the main entry point for defining Gulp tasks and using Gulp plugins.
  Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
'use strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

var paths = {
    viewAndJs: ['./**/*.{js,html,map}', '!./wwwroot/**/*', '!./node_modules/**/*', '!./jspm_modules/**/*', '!./gulpfile.js'],
    tsSource: ["./**/*.ts",
        "!./node_modules/**/*",
        "!./wwwroot/**/*"]
};

gulp.task('default',['compile-ts','copy'], function() {
  // place code for your default task here
});

gulp.task('copy', function() {
    gulp.src(paths.viewAndJs)
        .pipe(gulp.dest('./wwwroot'));
});

gulp.task('watch', function () {
    gulp.watch(paths.tsSource, ['compile-ts']);
    gulp.watch(paths.viewAndJs, ['copy']);
});

gulp.task('compile-ts', function () {
    var tsResult = gulp.src(paths.tsSource)
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest(''));
});
