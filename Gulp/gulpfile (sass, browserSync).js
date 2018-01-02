'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// compile scss to css
gulp.task('sass', () => {
	return gulp
		.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// sync browser automatically
gulp.task('browserSync', () => {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
});

// watch for changes and do stuff on save
gulp.task('watch', ['browserSync', 'sass'], () => {
	gulp.watch('app/scss/**/*.scss', ['sass']);

	// reload browser on html or js files change
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/**/*.js', browserSync.reload);

});