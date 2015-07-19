var gulp      = require('gulp');
var webserver = require('gulp-webserver');
var concat    = require('gulp-concat');
var bump      = require('gulp-bump');
var sass      = require('gulp-sass');

var paths = {
  sourcefiles : [
    './src/web-presentation.html',
    './src/web-slide.html',
    './src/web-slide-title.html',
    './src/web-presentation-keyboardcontrols.html',
    './src/web-presentation-progress.html'],
  transitionsSrc: './src/transitions/**/*.scss',
  transitionsFile: './src/transitions/transitions.scss'
};

gulp.task('webserver', function() {
  gulp.src('demo')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('dist', function() {
  gulp.src(paths.sourcefiles)
    .pipe(concat('web-presentation.html'))
    .pipe(gulp.dest('./dist/'))
    .pipe(gulp.dest('./demo/'))
});

gulp.task('sass', function () {
  gulp.src(paths.transitionsFile)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./demo'));
});

gulp.task('watch', function(){
  gulp.watch(paths.sourcefiles, ['dist']);
  gulp.watch(paths.transitionsSrc, ['sass']);
});

gulp.task('minor', function(){
  gulp.src('./bower.json')
  .pipe(bump({type:'minor'}))
  .pipe(gulp.dest('./'));
});

gulp.task('patch', function(){
  gulp.src('./bower.json')
      .pipe(bump({type:'patch'}))
      .pipe(gulp.dest('./'));
});

gulp.task('default', ['watch', 'webserver']);
