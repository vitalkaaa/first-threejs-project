var browserSync = require('browser-sync');
var browserify = require('gulp-browserify');
var gulp = require("gulp");
var server = require('gulp-express');
var reload = browserSync.reload;

gulp.task('scripts', function(){
    return gulp.src('public/javascripts/three.js')
                .pipe(browserify())
                .pipe(gulp.dest('public/javascripts/out'))
                .pipe(reload({stream:true}));
});


gulp.task('browserSync',['scripts', 'server'], function() {
    browserSync({
        port: 5000,
        open: true,
        notify: false
    });
});


gulp.task('watcher',function(){
    gulp.watch('public/javascripts/*.js', ['scripts']);
});

gulp.task('server',function(){
    server.run('app.js');
});

gulp.task('default', ['watcher', 'browserSync']);