const { existsSync } = require('node:fs');
const { buildReact, copyFiles, deleteFoldersRecursive, npmInstall } = require('@iobroker/build-tools');

const sourceDirectory = `${__dirname}/src-widgets/`;
const targetDirectory = `${__dirname}/widgets/vis2rssfeed`;

function cleanVis2Widgets() {
    deleteFoldersRecursive(`${sourceDirectory}build`);
    deleteFoldersRecursive(targetDirectory);
}

function copyVis2Widgets() {
    copyFiles(['src-widgets/build/customWidgets.js'], 'widgets/vis2rssfeed');
    copyFiles(['src-widgets/build/assets/*.*'], 'widgets/vis2rssfeed/assets');
    copyFiles(['src-widgets/build/img/*'], 'widgets/vis2rssfeed/img');
}

if (process.argv.includes('--javascript-vite') || process.argv.length === 2) {
    cleanVis2Widgets();

    const installDependencies = existsSync(`${sourceDirectory}node_modules`)
        ? Promise.resolve()
        : npmInstall(sourceDirectory);

    installDependencies
        .then(() => buildReact(sourceDirectory, { rootDir: __dirname, vite: true }))
        .then(() => copyVis2Widgets())
        .catch(error => {
            console.error(`Cannot build VIS-2 widgets: ${error}`);
            process.exitCode = 1;
        });
}
