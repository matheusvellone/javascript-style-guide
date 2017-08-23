module.exports = {
    env: {
        browser: true,
    },
    extends: [
        './common',
    ].map(require.resolve),
};
