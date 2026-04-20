'use strict';

/**
 * cat-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cat-post.cat-post');
