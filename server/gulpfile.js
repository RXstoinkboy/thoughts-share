const 
    gulp = require('gulp'),

    noop = require('gulp-noop'),

    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    assets = require('postcss-assets'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),

    src = './public/src',
    dist = './public/dist';


// CSS TASKS    
function css(){
    return gulp.src(src + '/scss/index.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'nested',
            includePath: './public/src/assets/images/',
            preciion: 3,
            errLogToConsole: true
        })).on('error', sass.logError)
        .pipe(postcss([
            assets({loadPaths: ['./public/src/assets/images']}),
            autoprefixer({browsers: ['last 2 versions', '> 2%']}),
            mqpacker,
            cssnano
        ]))
        .pipe(sourcemaps ? sourcemaps.write() : noop())
        .pipe(gulp.dest(dist + '/css'))
}

exports.css = css;

