'use strict';

/**
 * program controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::program.program', ({ strapi }) => ({
    async find(ctx) { 
        ctx.query.populate = {
            category: {
                populate: {
                parent: true,
                childrent: false,
                }
            }
        }
        return await super.find(ctx);
    }
}));