import gulp from 'gulp';
import { JSAPP } from '../settings';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import errorJavascript from './error-javascript';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import errorLog from './error-log';
import browser from 'browser-sync';

function getBundler(isDistribution) {
    return browserify({
        entries: [JSAPP.sourceFile],
        transform: [babelify], // Compiles ES6 and React JSX
        plugin: [watchify],
        extensions: ['.js'],
        debug: !isDistribution,
        cache: {},
        packageCache: {},
        fullPaths: true
    });
}

// This JSAPP function:
// Compiles ES6 and React JSX
// Concatenates JS files into a single file
export function jsApp() {
    const bundler = getBundler(false);
    function build(file) {
        if (file) console.log('Javascript recompiling: ' + file);
        return bundler
            .bundle()
            .on('error', errorJavascript)
            .on('error', console.log.bind(console, 'Javascript error: '))
            .pipe(source(JSAPP.destFile))
            .pipe(buffer())
            .pipe(gulp.dest(JSAPP.destPath))
            .pipe(browser.reload({ stream: true }));
    }

    build();
    bundler.on('update', build);
};

// This JSAPP function:
// Compiles ES6 and React JSX
// Concatenates JS files into a single file
// Minifies the resulting JS
export function jsAppDist() {
    const bundler = getBundler(true);
    function build(file) {
        if (file) console.log('Javascript recompiling: ' + file);
        return bundler
            .bundle()
            .on('error', errorJavascript)
            .on('error', console.log.bind(console, 'Javascript error: '))
            .pipe(source(JSAPP.destFile))
            .pipe(buffer())
            .pipe(uglify().on('error', errorLog))
            .pipe(gulp.dest(JSAPP.destPath))
            .pipe(browser.reload({ stream: true }));
    }

    build();
    bundler.on('update', build);
};
