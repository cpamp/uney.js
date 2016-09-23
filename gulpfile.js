var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');
var fs = require('fs');
var rename = require('gulp-rename');

var src = [
    './build/core.js',
];

var combiners = [
    '!./src/core.js',
    '!./src/node.js',
    './src/promise.js',
    './src/**.js'
];

var out = 'uney.js';

var outMin = 'uney.min.js';

var build = './build';

var dest = './dist';

var outDest = './dist/' + out;

function combine() {
    return gulp.src(combiners)
        .pipe(concat(out))
        .pipe(gulp.dest(build));
}
gulp.task('combine', combine);

function insert() {
    var f = fs.readFileSync('./build/uney.js');
    return gulp.src('./src/core.js')
        .pipe(replace('/**INJECT**/', f))
        .pipe(rename({basename: 'uney'}))
        .pipe(gulp.dest('./dist'));
}
gulp.task('insert', ['combine'], insert);

function glf() {
    return gulp.src(outDest)
        .pipe(uglify())
        .pipe(rename({basename: 'uney.min'}))
        .pipe(gulp.dest(dest));
}
gulp.task('uglify', ['insert'], glf);

gulp.task('build', ['insert', 'uglify']);