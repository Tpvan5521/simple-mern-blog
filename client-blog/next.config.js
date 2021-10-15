const withTM = require('next-transpile-modules')(['viblo-sdk', 'twemoji']);

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withTM], {});