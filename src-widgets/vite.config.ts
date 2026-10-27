import react from '@vitejs/plugin-react';
import path from 'path';
import { federation } from '@module-federation/vite';
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
    '@iobroker/gui-components': singleton(),
};

const config = {
    oxc: {
        jsx: {
            // VIS-2 shares its production React runtime, which does not provide jsxDEV.
            development: false,
        },
    },
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
        react(),
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
        target: ['chrome89', 'edge89', 'firefox89', 'safari15'],
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
            '@iobroker/gui-components',
        ],
    },
    resolve: {
        tsconfigPaths: true,
        dedupe: [
            'react',
            'react-dom',
            '@emotion/react',
            'prop-types',
            '@mui/material',
            '@mui/icons-material',
            '@iobroker/gui-components',
        ],
        alias: {
            'react-ace': path.resolve(configDir, 'node_modules/react-ace/lib/ace.js'),
            fs: path.resolve(configDir, 'src/empty.js'),
            path: path.resolve(configDir, 'src/empty.js'),
        },
    },
};

export default config;
