var gulp        = require('gulp');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var source      = require('vinyl-source-stream');
var babelify    = require('babelify');
var browserify  = require('browserify');
var browserSync = require('browser-sync').create();


// Static Server + watching scss/html/js files
gulp.task('serve', ['sass', 'bundle', 'copy'], function() {

    browserSync.init({
        server: "./"
    });
    gulp.watch("./src/**/*.scss", ['sass']);
    gulp.watch("./src/**/*.js", ['bundle']);
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

// Create js app bundle 
gulp.task('bundle', function() {
    return browserify(
        {
            debug: true, // Gives us sourcemapping
            extensions: ['.js', '.jsx'],
            entries: 'src/app.js',
        })
        .transform(babelify.configure({
            plugins: ['transform-react-jsx'],
            presets: ['es2015'],
            ignore: /(bower_components)|(node_modules)/
        }) // We want to convert JSX to normal javascript
    )
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);
gulp.task('build', ['sass', 'bundle', 'copy']);
