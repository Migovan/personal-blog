const gulp = require('gulp'),
	  stylus = require('gulp-stylus'),
	  browserSync = require('browser-sync').create(),
   	  del = require('del'),
	  rev = require('gulp-rev'),
	  pug = require('gulp-pug'),
	  cssnano = require('gulp-cssnano'),
	  babel = require('gulp-babel'),
      Concat = require('gulp-concat'),
      webpack = require('webpack'),
      webpackConfig = require('./webpack.config'),
      stream = require('webpack-stream');

gulp.task('js', function () {
    return gulp.src('frontend/assets/js/index.js')
        .pipe(stream(webpackConfig, webpack))
        .pipe(gulp.dest('public'))
});

gulp.task('styles', function () {
	return gulp.src('frontend/styles/main.styl')
	.pipe(stylus())
	.pipe(cssnano())
	.pipe(gulp.dest('public/styles'));
});

gulp.task('pug', function () {
	return gulp.src('frontend/assets/templates/*.pug')
	.pipe(pug())
	.pipe(gulp.dest('public'))
  });


gulp.task('clean', function () {
	return del('public');
});

gulp.task('image', function () {
    return gulp.src('./frontend/styles/img/*.png')
        .pipe(gulp.dest('./public'));
});

gulp.task('build', gulp.series('clean', 'styles', 'pug', 'js', 'image'));


gulp.task('watch', function () {
	gulp.watch('frontend/assets/**/*.pug', gulp.task('pug'));
	gulp.watch('frontend/assets/js/**/*.js', gulp.task('js'));
	gulp.watch('frontend/styles/**/*.*', gulp.task('styles'));
    gulp.watch('frontend/styles/img/**/*.*', gulp.series('image'));
});


gulp.task('serve', function () {
	browserSync.init({
		server: 'public'
	});
	browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});



gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
