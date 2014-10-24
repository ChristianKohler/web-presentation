var gulp      = require('gulp');
var webserver = require('gulp-webserver');
var concat    = require('gulp-concat');
var bump      = require('gulp-bump');

var paths = {
  sourcefiles : [
  './src/web-presentation.html',
  './src/web-slide.html',
  './src/web-slide-title.html',
  './src/web-presentation-keyboardcontrols.html']
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

gulp.task('watch', function(){
  gulp.watch(paths.sourcefiles, ['dist']);
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
