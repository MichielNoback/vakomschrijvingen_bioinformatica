const gulp = require('gulp');

const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();
const shell = require('gulp-shell')

// Publishes the site to GitHub Pages
gulp.task('publish', () => {
  console.log('Publishing to GH Pages');
  return gulp.src('./_book/**/*')
    .pipe($.ghPages({
      origin: 'origin',
      branch: 'gh-pages'
    }));
});

gulp.task('echo', () => {
  console.log('echoing');
  var option, i = process.argv.indexOf("-m");
  if(i>-1) {
    option = process.argv[i+1];
  } else {
    option = "commit without message"
  }
  console.log(option)
  shell.task('touch newfile')
  shell.task('echo "message = ' + option + '" > test.txt');
});