const withCSS = require('@zeit/next-css')
const withImages = require('next-images');

module.exports = withImages(
  withCSS({
    publicRuntimeConfig: {
      localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
    },
    webpack: (config, options) => {
      cssModules: true,
      config.module.rules.push({
          // enforce: 'pre',
          // test: /\.js?$/,
          // exclude: [/node_modules/],
          // loader: 'eslint-loader',
          // options: {
          //   quiet: true,
          // }
      });
      config.node = {
        fs: 'empty'
      }
      return config;
    },
  })
);
