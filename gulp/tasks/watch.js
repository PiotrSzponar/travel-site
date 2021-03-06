const gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

function html() {
    browserSync.reload();
}

gulp.task('watch', () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    watch('./app/assets/styles/postcss/**/*.pcss', gulp.series('styles'));
    watch('./app/assets/scripts/js/**/*.js', gulp.series('scripts', html));
    watch(['./app/*.html', './app/assets/styles/css/*.css'], html);
});