// ioBroker eslint template configuration file for js and ts files
// Please note that esm or react based modules need additional modules loaded.
import config from '@iobroker/eslint-config';

export default [
    ...config,

    {
        // specify files to exclude from linting here
        ignores: [
            'widgets/rssfeed/js/rssfeed-dist.js',
            'widgets/rssfeed/js/ejs.js',
            'widgets/rssfeed/js/mode-ejs.js',
            'widgets/rssfeed/js/xxxjquery-3.2.1.min.js',
            'widgets/rssfeed/js/xxxhighlight.pack.js',
            'widgets/rssfeed/js/xxxwords.js',
            '.dev-server/**',
            'backup/**',
            '*.test.js',
            'test/**/*.js',
            '*.config.mjs',
            'build',
            'admin/build',
            'admin/words.js',
            'admin/admin.d.ts',
            '**/adapter-config.d.ts'
        ]
    },

    {
        // you may disable some 'jsdoc' warnings - but using jsdoc is highly recommended
        // as this improves maintainability. jsdoc warnings will not block buiuld process.
        rules: {
            // 'jsdoc/require-jsdoc': 'off',
        },
    },

];