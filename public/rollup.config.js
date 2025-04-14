import resolve from '@rollup/plugin-node-resolve';
import summary from 'rollup-plugin-summary';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

const terserOptions = {
    warnings: true,
    ecma: 2020,
    compress: {
        unsafe: true,
        passes: 2,
    },
    output: {
        inline_script: false,
    },
    mangle: {
        properties: false,
    },
};

export default [
    {
        input: [
            'elements/int-app.js',
        ],
        output: {
            dir: 'build/rollup/elements',
            sourcemap: true,
            format: 'esm',
            // skip the hash suffix
            chunkFileNames: '[name].js',
        },
        plugins: [
            typescript(),
            resolve(),
            terser(terserOptions),
            summary({
                // already minified
                showMinifiedSize: false,
            }),
        ],
        preserveEntrySignatures: false,
        watch: {
            chokidar: {
                usePolling: true,
            }
        }
    },
];
