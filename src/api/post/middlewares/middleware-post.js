'use strict';

/**
 * `middleware-post` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In middleware-post middleware.');

    await next();
  };
};
