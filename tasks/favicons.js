import gulp from 'gulp';
import rimraf from 'rimraf';
import fs from 'fs';
import realFavicon from 'gulp-real-favicon';

// This FAVICONS function:
// Generates the favicon files inside the dest folder
// Generates the favicon partial inside the partials folder
export default function favicons(done) {
    const FAVICONS = require('../' + process.env.PROJECT + '-favicons');

    rimraf(FAVICONS.dest, () => {
        FAVICONS.settings.error_on_image_too_small = false;
        FAVICONS.markupFile = 'favicons-temp.json';
        realFavicon.generateFavicon(FAVICONS, () => {
            fs.writeFile(FAVICONS.partialDest + '/' + FAVICONS.partialName, '', () => {
                gulp.src([FAVICONS.partialDest + '/' + FAVICONS.partialName])
                    .pipe(realFavicon.injectFaviconMarkups(require('../favicons-temp.json').favicon.html_code))
                    .pipe(gulp.dest(FAVICONS.partialDest));
                done();
            });
        });
    });
}
