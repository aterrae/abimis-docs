import path from 'path';
import webpack from 'webpack';
import errorNotify from './error-notify';
import browser from 'browser-sync';

export default function build(development, done) {
    done();

    const COMPATIBILITY = require('../' + process.env.PROJECT).COMPATIBILITY;
    const JAVASCRIPT = require('../' + process.env.PROJECT).JAVASCRIPT;

    let plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ];

    if (!development) {
        plugins.push(new webpack.optimize.UglifyJsPlugin());
    }

    return webpack({
        entry: {
            [path.basename(JAVASCRIPT.sourceFile, '.js')]: path.resolve(JAVASCRIPT.sourceFile)
        },
        resolve: {
            modules: ["node_modules"].concat(JAVASCRIPT.libPath)
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: COMPATIBILITY.js
                    }
                }
            ]
        },
        plugins: plugins,
        devtool: development ? "cheap-module-eval-source-map" : false,
        output: {
            path: path.resolve(JAVASCRIPT.destPath),
            filename: '[name].js'
        },
        cache: true,
        watch: development
    }, (err, stats) => {
        let jsonStats = stats.toJson('normal');
        console.log('[JS] Javascript recompiling...');
        console.log('[JS] Finished in ' + jsonStats.time + 'ms.');
        if (err || stats.hasErrors()) {
            let error = jsonStats.errors[0];
            console.log(error);
            errorNotify({
                fileName: error.split('\n')[0],
                message: error.split('\n')[1],
                javascript: true
            });
        } else {
            browser.reload();
        }
    });
}

// This JAVASCRIPT function:
// Compiles ES6 and React JSX
// Concatenates JS files into a single file
export function javascript(done) {
    build(true, done);
}

// This JAVASCRIPTDIST function:
// Compiles ES6 and React JSX
// Concatenates JS files into a single file
// Minifies the resulting JS
export function javascriptDist(done) {
    build(false, done);
}
