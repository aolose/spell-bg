module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'eslint-config-prettier'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['import'],
    rules: {
        'import/newline-after-import': ['error', { count: 1 }],
    },
};
