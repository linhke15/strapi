'use strict';

const { categoryPopulate } = require('../../../utils/populate');

/**
 * category-program controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category-program.category-program', ({ strapi }) => ({
    async find(ctx) {
    ctx.query.populate = categoryPopulate;
    //  ctx.query.filters = {
    //         ...ctx.query.filters,
    //         locale: ctx.query.locale || 'en' // Mặc định là en nếu không có ?locale=...
    //     };
    return await super.find(ctx);
    }
})
);
