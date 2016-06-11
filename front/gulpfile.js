var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');


// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'babel'], () => {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./src/**/*.scss", ['sass']);
    gulp.watch("./src/**/*.js", ['babel']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
    return gulp.src("./src/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('babel', () => {
    return gulp.src(["./src/**/*.js"])
        .pipe(concat('app.js'))
        .pipe(babel({
            plugins: ['transform-react-jsx'],
            presets: ['es2015']
        }))
        .pipe(browserify({
		  insertGlobals : true,
		  debug : !gulp.env.production
		}))
        .pipe(gulp.dest('dist'));
});


gulp.task('default', ['serve']);