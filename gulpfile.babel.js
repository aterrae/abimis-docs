'use strict';

import gulp from 'gulp';

import abimis from './tasks/abimis';
import minimist from 'minimist';
import { nodeDevEnv, nodeDistEnv } from './tasks/node-env';
import clean from './tasks/clean';
import html from './tasks/html';
import { sass, sassCheck, sassDist } from './tasks/sass';
import { javascript, javascriptDist } from './tasks/javascript';
import { assets, images, imagesDist } from './tasks/assets';
import { humans, robots } from './tasks/txt';
import server from './tasks/server';
import serverRedux from './tasks/server-redux';
import favicons from './tasks/favicons';
import get from './tasks/get';

const PROJECT = minimist(process.argv.slice(2)).project;
if (PROJECT) {
    process.env.PROJECT = PROJECT;
} else {
    process.env.PROJECT = 'settings';
}

const HTML = require('./' + process.env.PROJECT).HTML;
const SASS = require('./' + process.env.PROJECT).SASS;
const ASSETS = require('./' + process.env.PROJECT).ASSETS;

// This BUILD task:
// Builds all the website files except the project's JS
gulp.task('build',
    gulp.series(clean, gulp.parallel(html, sass, assets, images))
);

// This WATCH function:
// Watches changes in the HTML, SASS and in the ASSETS folder
function watch() {
    gulp.watch(HTML.sourcePath, html);
    gulp.watch(SASS.sourcePath, sass);
    gulp.watch(ASSETS.sourcePath, assets);
    gulp.watch(ASSETS.imagesSourcePath, images);

    gulp.watch('./abimis_components/**/*.hbs', html);
    gulp.watch('./abimis_components/**/*.scss', sass);
}

// This DEFAULT task:
// Calls the BUILD task
// Runs the server
// Builds the project's JS
// Starts watching all changes
gulp.task('default',
    gulp.series(abimis, nodeDevEnv, 'build', javascript, server, gulp.parallel(watch))
);

// This BUILDDIST task:
// Calls the SASSCHECK task
// Builds all the website files except the project's JS
gulp.task('buildDist',
    gulp.series(clean, sassCheck, gulp.parallel(html, sassDist, assets, imagesDist, humans, robots))
);

// This WATCHDIST function:
// Watches changes in the HTML, SASS and in the ASSETS folder
function watchDist() {
    gulp.watch(HTML.sourcePath, html);
    gulp.watch(SASS.sourcePath, gulp.series(sassCheck, sassDist));
    gulp.watch(ASSETS.sourcePath, assets);
    gulp.watch(ASSETS.imagesSourcePath, imagesDist);
}

// This DISTRIBUTION task:
// Sets NODE_ENV
// Calls the BUILDDIST task
// Runs the server
// Builds the project's JS
// Starts watching all changes
gulp.task('distribution',
    gulp.series(abimis, nodeDistEnv, 'buildDist', javascriptDist, server, gulp.parallel(watchDist))
);

// This REDUX task:
// Runs the Redux server
gulp.task('redux',
    gulp.series(serverRedux)
);

// This FAVICONS task:
// Calls the FAVICONS task
gulp.task('favicons',
    gulp.series(favicons)
);

// This GET task:
// Calls the GET task
gulp.task('get',
    gulp.series(get)
);
