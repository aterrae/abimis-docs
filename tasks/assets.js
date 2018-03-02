import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import browser from 'browser-sync';

// This ASSETS function:
// Copies all folders and their files (except the img folder) inside the dest folder
export function assets() {
    const ASSETS = require('../' + process.env.PROJECT).ASSETS;
    return gulp.src(ASSETS.sourcePath)
        .pipe(gulp.dest(ASSETS.destPath))
        .pipe(browser.reload({ stream: true }));
}

// This IMAGES function:
// Copies all images located in the img folder inside the dest folder
export function images() {
    const ASSETS = require('../' + process.env.PROJECT).ASSETS;
    return gulp.src(ASSETS.imagesSourcePath)
        .pipe(gulp.dest(ASSETS.imagesDestPath))
        .pipe(browser.reload({ stream: true }));
}

// This IMAGESDIST function:
// Copies all images located in the img folder inside the dest folder
// Minifies all image files of this type: GIF, JPEG, PNG, SVG
export function imagesDist() {
    const ASSETS = require('../' + process.env.PROJECT).ASSETS;
    return gulp.src(ASSETS.imagesSourcePath)
        .pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest(ASSETS.imagesDestPath))
        .pipe(browser.reload({ stream: true }));
}
