import gulp from 'gulp';
import SETTINGS from '../settings';
import { execSync } from 'child_process';
import argv from 'minimist';
import fs from 'fs';

// This GET function:
// Git clone the package repo
// Installs all of the package's dependencies
// Injects all the necessary settings into Abimis' settings.json
// Moves all of the code that is overwritten by the package into folderName.old
// Copies all files from the package to a folder of the local project
// Removes the cloned folder
export default function get(done) {
    let repository = 'abimis' + process.argv[3];

    if (!fs.existsSync(repository)) {
        execSync('git clone https://github.com/aterrae/' + repository);
    }

    const ABIMIS = require('../' + repository + '/abimis');
    const MAIN = ABIMIS.main;
    const BOWER = ABIMIS.bower;
    const NPM = ABIMIS.npm;
    const SASS = ABIMIS.sass;
    const JS = ABIMIS.js;

    dependencies("bower", BOWER);
    dependencies("npm", NPM);

    function dependencies(type, data) {
        let dependenciesList = "";
        for (var i = 0; i < data.length; i++) {
            dependenciesList += data[i] + " ";
            console.log('Installing ' + data[i]);
        }
        if (dependenciesList != "") {
            execSync(type + ' install --save ' + dependenciesList);
            console.log('Finished ' + type + ' dependencies installation');
        }
    }

    settingsInjector(SASS, SETTINGS.SASS.libPaths);
    settingsInjector(JS, SETTINGS.JSLIBS.sourceFiles);

    function settingsInjector(source, dest) {
        for (var i = 0; i < source.length; i++) {
            let exists = true;
            for (var j = 0; j < dest.length; j++) {
                if (source[i] == dest[j]) {
                    exists = false;
                }
            }
            if (exists) { dest.push(source[i]); }
        }
    }

    fs.writeFile('settings.json', JSON.stringify(SETTINGS, null, 2));

    for (var i = 0; i < MAIN.length; i++) {
        let newFolder = MAIN[i];
        let oldFolder = MAIN[i] + '.old';
        if (fs.existsSync(oldFolder)) {
            execSync('rm -rf ' + oldFolder);
        } else {
            execSync('mv ' + newFolder + ' ' + oldFolder);
        }
        execSync('cp -R ' + repository + '/' + newFolder + '/. ' + newFolder);
    }

    execSync('rm -rf ' + repository);
    done();
}
