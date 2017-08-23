module.exports = {
    env: {
        es6: true,
        node: true
    },
    extends: [
        './common',
    ].map(require.resolve),
};
