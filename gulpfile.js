const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

const DIR = {
  SRC: 'src',
  DEST: 'dist',
};

const PATH = {
  SRC: {
    JS: `${DIR.SRC}/js/*.js`,
    CSS: `${DIR.SRC}/css/*.css`,
    HTML: `${DIR.SRC}/*.html`,
    IMAGES: `${DIR.SRC}/images/*`,
  },
  DEST: {
    JS: `${DIR.DEST}/js`,
    CSS: `${DIR.DEST}/css`,
    HTML: `${DIR.DEST}/`,
    IMAGES: `${DIR.DEST}/images`,
  },
};

gulp.task('default', () => {
  gulp
    .src(PATH.SRC.JS)
    .pipe(eslint())
    .pipe(eslint.format());

  return gulp
    .src(PATH.SRC.JS)
    .pipe(babel())
    .pipe(gulp.dest(PATH.DEST.JS));
});
