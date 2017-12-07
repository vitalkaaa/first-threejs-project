let browserSync = require('browser-sync');
let browserify = require('gulp-browserify');
let gulp = require("gulp");
let server = require('gulp-express');
var clean = require('gulp-clean');
let reload = browserSync.reload;

gulp.task('build', function(){
    gulp.src('public/*', {read: false})
        .pipe(clean());

    gulp.src('src/index.html')
        .pipe(gulp.dest('public/'));

    return gulp.src('src/javascripts/main.js')
                .pipe(browserify())
                .pipe(gulp.dest('public/javascripts/'))
                .pipe(reload({stream:true}));
});


gulp.task('browserSync',['build', 'server'], function() {
    browserSync({
        port: 5000,
        open: true,
        notify: false
    });
});


gulp.task('watcher',function(){
    gulp.watch('src/*/*.js', ['build']);
});

gulp.task('server',function(){
    server.run('app.js');
});

gulp.task('default', ['watcher', 'browserSync']);