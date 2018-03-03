const gulp = require('gulp');

// Plugins einbauen
const changed = require('gulp-changed');
const del = require('del');
const sass = require('gulp-sass');
const jshint = require('gulp-jshint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const minifyhtml = require('gulp-minify-html');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
const cssnano = require('gulp-cssnano');
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const bourbon = require('node-bourbon').includePaths;
const neat = require('node-neat').includePaths;

let watching = false;

function handleError(err) {
  console.error(err.toString());
  if (watching) {
    this.emit('end'); // jshint ignore:line
  } else {
    // if you want to be really specific
    process.exit(1);
  }
}

// Komprimiere Bilder
gulp.task('images', function () {
  return gulp.src('images/**/*')
    .pipe(plumber())
    .pipe(changed('dist/images'))
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({
      message: 'Images task complete',
      onLast: true
    }));
});

// Komprimiere SCSS
gulp.task('styles', function () {
  return gulp.src('styles/main.scss')
    .pipe(plumber())
    .pipe(sass({
      style: 'expanded',
      includePaths: [neat, bourbon]
    }).on('error', handleError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(sourcemaps.init())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({
      message: 'Styles task complete'
    }));
});

// Komprimiere Javascript
gulp.task('scripts', function () {
  return gulp.src([
      "scripts/modernizr.js",
      "scripts/filterable.js",
      "scripts/breakpoints.js",
      "scripts/queue.js",
      "scripts/main.js"
    ])
    .pipe(plumber())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify().on('error', handleError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({
      message: 'Scripts task complete',
      onLast: true
    }));
});

gulp.task('clean', function () {
  return del(['dist/styles', 'dist/scripts', 'dist/images']);
});

gulp.task('default', ['clean'], function () {
  gulp.start('styles', 'scripts', 'images');
});

gulp.task('watch', function () {
  watching = true;

  // Watch image files
  gulp.watch('images/**/*', ['images']);

  // Watch .scss files
  gulp.watch('styles/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('scripts/**/*.js', ['scripts']);
});
