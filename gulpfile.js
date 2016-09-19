var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var src = [
    './src/core.js',
    './src/promise.js',
    './src/!(node)*.js',
    './src/node.js'
];

var out = 'uney.js';

var outMin = 'uney.min.js';

var dest = './dist';

var outDest = './dist/' + out;

function cnct() {
    return gulp.src(src)
        .pipe(concat(out))
        .pipe(gulp.dest(dest));
}
gulp.task('concat', cnct);

function glf() {
    return gulp.src(outDest)
        .pipe(concat(outMin))
        .pipe(uglify())
        .pipe(gulp.dest(dest));
}
gulp.task('uglify', glf);

gulp.task('build', ['concat', 'uglify']);