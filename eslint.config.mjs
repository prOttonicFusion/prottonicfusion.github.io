import prottonic from 'eslint-config-prottonic/base.js'
import globals from 'globals'

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
                ...globals.browser,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
        },
    },
]
