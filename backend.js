module.exports = {
    env: {
        es6: true,
        node: true
    },
    parserOptions: {
        sourceType: 'script'
    },
    extends: [
        './common',
    ].map(require.resolve),
};
