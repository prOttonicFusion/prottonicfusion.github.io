import prottonic from 'eslint-config-prottonic/base.js'
import globals from 'globals'

// https://github.com/sindresorhus/globals/issues/239
const GLOBALS_BROWSER_FIX = Object.assign({}, globals.browser, {
    AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope '],
})
delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope ']

export default [
    {
        ignores: [
            'node_modules/**',
            'public/**',
            '.cache/**',
        ],
    },
    ...prottonic,
    {
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.node,
                ...GLOBALS_BROWSER_FIX,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
        },
    },
]
