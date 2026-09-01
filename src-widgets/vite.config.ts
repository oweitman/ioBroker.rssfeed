import react from '@vitejs/plugin-react';
import path from 'path';
import vitetsConfigPaths from 'vite-tsconfig-paths';
import { federation } from '@module-federation/vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import { fileURLToPath } from 'node:url';

const configDir = path.dirname(fileURLToPath(import.meta.url));

const singleton = (): { singleton: true; requiredVersion: '*' } => ({
    singleton: true,
    requiredVersion: '*',
});

const sharedModules = {
    react: singleton(),
    'react-dom': singleton(),
    'react-dom/client': singleton(),
    '@mui/material': singleton(),
    '@mui/icons-material': singleton(),
    'prop-types': singleton(),
    '@iobroker/adapter-react-v5': singleton(),
};

const config = {
    plugins: [
        federation({
            manifest: true,
            name: 'vis2rssfeedWidgets',
            filename: 'customWidgets.js',
            exposes: {
                './RSSArticleMarquee5': './src/RSSArticleMarquee5', // List of all widgets in this package
                './RSSMetaHelper': './src/RSSMetaHelper', // List of all widgets in this package
                './RSSArticleHelper': './src/RSSArticleHelper', // List of all widgets in this package
                './RSSWidget': './src/RSSWidget', // List of all widgets in this package
                './RSSMultiWidget': './src/RSSMultiWidget', // List of all widgets in this package
                './translations': './src/translations',
            },
            remotes: {},
            shared: sharedModules,
            dts: false,
        }),
        topLevelAwait({
            promiseExportName: '__tla',
            promiseImportName: (index: number): string => `__tla_${index}`,
        }),
        react(),
        vitetsConfigPaths(),
    ],
    server: {
        port: 3000,
        proxy: {
            '/_socket': 'http://localhost:8082',
            '/vis.0': 'http://localhost:8082',
            '/adapter': 'http://localhost:8082',
            '/habpanel': 'http://localhost:8082',
            '/vis': 'http://localhost:8082',
            '/widgets': 'http://localhost:8082/vis',
            '/widgets.html': 'http://localhost:8082/vis',
            '/web': 'http://localhost:8082',
            '/state': 'http://localhost:8082',
        },
    },
    base: './',
    build: {
        target: 'chrome81',
        outDir: './build',
        rollupOptions: {
            onwarn(warning: { code: string }, warn: (warning: { code: string }) => void): void {
                // Suppress "Module level directives cause errors when bundled" warnings
                if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
                    return;
                }
                warn(warning);
            },
        },
    },
    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            'react-dom/client',
            '@emotion/react',
            '@emotion/styled',
            '@mui/material',
            '@mui/icons-material',
            '@mui/system',
            'prop-types',
            '@iobroker/adapter-react-v5',
        ],
    },
    resolve: {
        dedupe: [
            'react',
            'react-dom',
            'prop-types',
            '@mui/material',
            '@mui/icons-material',
            '@iobroker/adapter-react-v5',
        ],
        alias: {
            'react-ace': path.resolve(configDir, 'node_modules/react-ace/lib/ace.js'),
            fs: path.resolve(configDir, 'src/empty.js'),
            path: path.resolve(configDir, 'src/empty.js'),
        },
    },
};

export default config;
