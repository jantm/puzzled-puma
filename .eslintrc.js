module.exports = {
    extends: [
        'airbnb-typescript',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: '.',
    },
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    plugins: [
        'react',
        'jsx-a11y',
        'import',
        'typescript',
        '@typescript-eslint',
    ],
    rules: {
        // File types to be checked:
        'react/jsx-filename-extension': [ 1,
            {
                extensions: [ '.js', '.jsx', '.tsx', '.ts' ],
            }
        ],

        // Allow to reassign param properties:
        'no-param-reassign': ['error', { props: false }],

        // Semicolon:
        semi: 'off',
        '@typescript-eslint/semi': ['error'],
    },
};
