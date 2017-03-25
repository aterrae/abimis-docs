import gulp from 'gulp';
import { COMPATIBILITY, SASS } from '../settings';
import postcss from 'gulp-postcss';
import syntax from 'postcss-scss';
import autoprefixer from 'autoprefixer';
import doiuse from 'doiuse';
import sourcemaps from 'gulp-sourcemaps';
import compileSass from 'gulp-sass';
import errorSass from './error-sass';
import cssnano from 'gulp-cssnano';
import browser from 'browser-sync';

// This SASS function:
// Compiles the SASS files
// Adds CSS prefixes where necessary
// Generates the sourcemaps
export function sass() {
    let plugin = [
        autoprefixer({ browsers: COMPATIBILITY.browsers })
    ]
    return gulp.src(SASS.sourcePath)
        .pipe(sourcemaps.init())
        .pipe(compileSass({ includePaths: SASS.libPaths })
        .on('error', errorSass)
        .on('error', compileSass.logError))
        .pipe(postcss(plugin))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(SASS.destPath))
        .pipe(browser.reload({ stream: true }));
}

// This SASSCHECK function:
// Detects browser support using the caniuse database
export function sassCheck() {
    let plugin = [
        doiuse({
            browsers: COMPATIBILITY.browsers,
            ignore: COMPATIBILITY.ignore,
            ignoreFiles: COMPATIBILITY.ignoreFiles,
            onFeatureUsage: function (usageInfo) {
                console.log(usageInfo.message)
            }
        })
    ]
    return gulp.src(SASS.sourcePath)
        .pipe(postcss(plugin, { syntax: syntax }))
}

// This SASSDIST function:
// Adds CSS prefixes where necessary
// Compiles the SASS files
// Minifies the resulting CSS
export function sassDist() {
    let plugin = [
        autoprefixer({ browsers: COMPATIBILITY.browsers })
    ]
    return gulp.src(SASS.sourcePath)
        .pipe(postcss(plugin, { syntax: syntax }))
        .pipe(compileSass({ includePaths: SASS.libPaths })
        .on('error', errorSass)
        .on('error', compileSass.logError))
        .pipe(cssnano())
        .pipe(gulp.dest(SASS.destPath))
        .pipe(browser.reload({ stream: true }));
}
