const { i18n } = require('./next-i18next.config')
const withImages = require('next-images');
// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = withImages({
  // i18n,
  trailingSlash: true,
  images: {
    disableStaticImages: true
  },
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
      ? process.env.LOCALE_SUBPATHS
      : 'none',
  },
  webpack: (config, options) => {
    cssModules: true,
    config.plugins.push(
      // new ESLintPlugin({
        // exclude: ['node_modules']
      // })
    );
    config.node = {}
    return config;
  },
});
