module.exports = {
    env: {
        browser: true,
    },
    parserOptions: {
        sourceType: 'module'
    },
    extends: [
        './common',
    ].map(require.resolve),
};
