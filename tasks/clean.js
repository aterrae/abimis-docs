import rimraf from 'rimraf';

// This CLEAN function:
// Deletes the dest folder
export default function clean(done) {
    const HTML = require('../' + process.env.PROJECT).HTML;
    rimraf(HTML.destPath, done);
}
