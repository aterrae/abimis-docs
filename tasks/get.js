import gulp from 'gulp';
import minimist from 'minimist';
import shell from 'shelljs';
import fs from 'fs';

// This GET function:
// Git clone the package repo
// Installs all of the package's devDependencies
// Installs all of the package's dependencies
// Injects all the necessary settings into Abimis' settings.json
// Moves all of the code that is overwritten by the package into folderName.old
// Copies all files from the package to a folder of the local project
// Removes the cloned folder
export default function get(done) {
    const SETTINGS = require('../' + process.env.PROJECT);

    const REPOSITORY = 'abimis-' + minimist(process.argv.slice(2)).package;

    if (!fs.existsSync(REPOSITORY)) {
        shell.exec('git clone https://github.com/aterrae/' + REPOSITORY);
    }

    const ABIMIS = require('../' + REPOSITORY + '/abimis');
    const MAIN = ABIMIS.main ? ABIMIS.main : [];
    const DEVDEPENDENCIES = ABIMIS.devDependencies ? ABIMIS.devDependencies : [];
    const DEPENDENCIES = ABIMIS.dependencies ? ABIMIS.dependencies : [];
    const PARTIALS = ABIMIS.partials ? ABIMIS.partials : [];
    const SASS = ABIMIS.sass ? ABIMIS.sass : [];
    const JS = ABIMIS.js ? ABIMIS.js : [];

    function genDependenciesList(dependenciesSource) {
        let dependenciesResult = '';
        for (let dependency of dependenciesSource) {
            dependenciesResult += dependency + ' ';
            console.log('Queuing: ' + dependency);
        }
        return dependenciesResult;
    }

    let devDependenciesList = genDependenciesList(DEVDEPENDENCIES);
    if (devDependenciesList != '') {
        if (shell.which('yarn')) {
            console.log('Installing devDependencies using Yarn =^•ω•^=');
            shell.exec('yarn add --dev ' + devDependenciesList);
            console.log('Finished devDependencies installation');
        } else {
            console.log('Installing devDependencies using NPM');
            shell.exec('npm install --save-dev ' + devDependenciesList);
            console.log('Finished devDependencies installation');
        }
    }

    let dependenciesList = genDependenciesList(DEPENDENCIES);
    if (dependenciesList != '') {
        if (shell.which('yarn')) {
            console.log('Installing dependencies using Yarn =^•ω•^=');
            shell.exec('yarn add ' + dependenciesList);
            console.log('Finished dependencies installation');
        } else {
            console.log('Installing dependencies using NPM');
            shell.exec('npm install --save ' + dependenciesList);
            console.log('Finished dependencies installation');
        }
    }

    settingsInjector(PARTIALS, SETTINGS.HTML.partials);
    settingsInjector(SASS, SETTINGS.SASS.libPath);
    settingsInjector(JS, SETTINGS.JAVASCRIPT.libPath);

    function settingsInjector(source, dest) {
        for (let i = 0; i < source.length; i++) {
            let exists = true;
            for (let j = 0; j < dest.length; j++) {
                if (source[i] == dest[j]) {
                    exists = false;
                }
            }
            if (exists) { dest.push(source[i]); }
        }
    }

    fs.writeFile(process.env.PROJECT + '.json', JSON.stringify(SETTINGS, null, 2));

    if (MAIN.length === 0) {
        shell.cp('-R', REPOSITORY + '/src/.', 'abimis_components');
    } else {
        for (let i = 0; i < MAIN.length; i++) {
            let repositoryFolder = MAIN[i];
            let projectFolder = MAIN[i].replace('src', SETTINGS.ROOT);
            let oldFolder = projectFolder + '.old';

            if (fs.existsSync(oldFolder)) {
                shell.rm('-rf', oldFolder);
            }
            shell.mv(projectFolder, oldFolder);
            shell.cp('-R', REPOSITORY + '/' + repositoryFolder + '/.', projectFolder);
        }
    }

    shell.rm('-rf', REPOSITORY);
    done();
}
