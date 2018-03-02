import gulp from 'gulp';
import postcss from 'gulp-postcss';
import syntax from 'postcss-scss';
import autoprefixer from 'autoprefixer';
import doiuse from 'doiuse';
import cssnano from 'cssnano';
import sourcemaps from 'gulp-sourcemaps';
import compileSass from 'gulp-sass';
import errorNotify from './error-notify';
import browser from 'browser-sync';

// This SASS function:
// Compiles the SASS files
// Adds CSS prefixes where necessary
// Generates the sourcemaps
export function sass() {
    const COMPATIBILITY = require('../' + process.env.PROJECT).COMPATIBILITY;
    const SASS = require('../' + process.env.PROJECT).SASS;

    let plugins = [
        autoprefixer({ browsers: COMPATIBILITY.css.browsers })
    ]
    return gulp.src(SASS.sourcePath)
        .pipe(sourcemaps.init())
        .pipe(compileSass({ includePaths: SASS.libPath })
        .on('error', errorNotify)
        .on('error', compileSass.logError))
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(SASS.destPath))
        .pipe(browser.reload({ stream: true }));
}

// This SASSCHECK function:
// Detects browser support using the caniuse database
export function sassCheck() {
    const COMPATIBILITY = require('../' + process.env.PROJECT).COMPATIBILITY;
    const SASS = require('../' + process.env.PROJECT).SASS;

    let plugins = [
        doiuse({
            browsers: COMPATIBILITY.css.browsers,
            ignore: COMPATIBILITY.css.ignore,
            ignoreFiles: COMPATIBILITY.css.ignoreFiles
        })
    ]
    return gulp.src(SASS.sourcePath)
        .pipe(postcss(plugins, { syntax: syntax }));
}

// This SASSDIST function:
// Compiles the SASS files
// Adds CSS prefixes where necessary
// Minifies the resulting CSS
export function sassDist() {
    const COMPATIBILITY = require('../' + process.env.PROJECT).COMPATIBILITY;
    const SASS = require('../' + process.env.PROJECT).SASS;

    let plugins = [
        cssnano(),
        autoprefixer({ browsers: COMPATIBILITY.css.browsers })
    ]
    return gulp.src(SASS.sourcePath)
        .pipe(compileSass({ includePaths: SASS.libPath })
        .on('error', errorNotify)
        .on('error', compileSass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest(SASS.destPath))
        .pipe(browser.reload({ stream: true }));
}
