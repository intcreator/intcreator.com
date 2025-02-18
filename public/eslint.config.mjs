import html from 'eslint-plugin-html';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: [
            '**/bower_components/',
            '**/build/',
            '**/node_modules/',
            '**/legacy/',
            '**/dependencies/',
        ],
    },
    ...compat.extends('eslint:recommended'),
    {
        plugins: {
            html,
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                Polymer: true,
            },

            ecmaVersion: 2020,
            sourceType: 'module',
        },

        rules: {
            indent: ['error', 4],
            'linebreak-style': ['error', 'unix'],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
        },
    },
];
