import gulp from 'gulp';
import iungo from 'iungo';
import errorNotify from './error-notify';
import browser from 'browser-sync';

// This HTML function:
// Compiles the Handlebars files including them in their respective files
export default function html() {
    const HTML = require('../' + process.env.PROJECT).HTML;

    return gulp.src(HTML.pages)
        .pipe(iungo({
            data: HTML.data,
            partials: HTML.partials,
            helpers: HTML.helpers
        }))
        .on('error', errorNotify)
        .pipe(gulp.dest(HTML.destPath))
        .pipe(browser.reload({ stream: true }));
}
