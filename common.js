module.exports = {
    parserOptions: {
        ecmaVersion: 6,
    },
    extends: [
        'airbnb-base',
    ],
    rules: {
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1
            }
        ],
        'import/no-dynamic-require': [
            0
        ],
        'no-underscore-dangle': [
            0,
            {
                allowAfterThis: true,
                allowAfterSuper: true
            }
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true
            }
        ],
        'object-shorthand': [
            'warn'
        ],
        'arrow-body-style': [
            0
        ],
        indent: [
            'error',
            2,
            {
                SwitchCase: 1
            }
        ],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never'
            }
        ],
        quotes: [
            'error',
            'single'
        ],
        'no-console': [
            'error'
        ],
        'no-param-reassign': [
            'error', {
                'props': false,
            }
        ],
        'linebreak-style': [
            0
        ],
        semi: [
            'error',
            'never'
        ],
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 4,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
    }
};
