'use strict';

const { globalPopulate } = require('../../../utils/populate');

/**
 *  global controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::global.global', ({ strapi }) => ({
    async find(ctx) { 
        ctx.query.populate = globalPopulate;
    const response = await super.find(ctx);
    return response;
    }
}));
