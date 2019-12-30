module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    root: true,
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': 'error',
        'no-console': 'off',
        'array-callback-return': 'off',
    },
};
