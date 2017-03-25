import { HTML } from '../settings';
import rimraf from 'rimraf';

// This CLEAN function:
// Deletes the dist folder
export default function clean(done) {
    rimraf(HTML.destPath, done);
}
