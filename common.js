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
      { max: 1 },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
        allowAfterSuper: true,
      },
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
    'no-console': ['error'],
    semi: [
      'error',
      'never'
    ],
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
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
