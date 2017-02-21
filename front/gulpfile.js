var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var source      = require('vinyl-source-stream');
var babelify    = require('babelify');
var browserify  = require('browserify');
var browserSync = require('browser-sync').create();


// Static Server + watching scss/html/js files
gulp.task('serve', ['sass', 'copy'], function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("./src/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('copy', function() {
    return gulp.src("./src/assets/**/*.*")
        .pipe(gulp.dest('dist/assets/'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./src/**/*.scss")
        .pipe(sass())
        .pipe(concat('app.css'))
        //.pipe(source('app.css'))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
gulp.task('build', ['sass', 'copy']);
