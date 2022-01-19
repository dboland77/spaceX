const defaultRules = [
    'react-app',
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:jest/recommended',
    // any other plugins or custom configuration you'd like to extend from.
];

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    extends: [...defaultRules, 'prettier'],
    rules: {
        'array-callback-return': 'warn',
        'consistent-return': 'warn',
        'default-case': 'warn',
        'react/prop-types': 'off',
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parserOptions: {
                project: './tsconfig.json',
            },
            plugins: ['@typescript-eslint'],
            extends: [
                ...defaultRules,
                'plugin:@typescript-eslint/recommended',
                'airbnb-typescript',
                'prettier',
            ],
            rules: {
                '@typescript-eslint/no-explicit-any': 'warn',
                '@typescript-eslint/no-unused-vars': 'warn',
                '@typescript-eslint/no-unused-expressions': 'warn',
                'import/no-extraneous-dependencies': [
                    'error',
                    { devDependencies: ['**/setupTests.ts', '**/**.test.tsx'] },
                ],
            },
        },
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
};
