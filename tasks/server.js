import { HTML, PORT } from '../settings';
import browser from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';

// This SERVER function:
// Starts the server with live reload
export default function server(done) {
    browser.init({
        server: {
            baseDir: HTML.destPath,
            middleware: [historyApiFallback()] // Fixes issues with the HTML5 History API
        },
        port: PORT
    });
    done();
}
