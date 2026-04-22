'use strict';

const { globalPopulate, landingPagePopulate } = require('../../../utils/populate');

/**
 * langdingpage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::langdingpage.langdingpage',({ strapi }) => ( {
    async find(ctx) {
        ctx.query.populate =landingPagePopulate;
      //  ctx.query.populate = globalPopulate;
        const response = await super.find(ctx);
        return response;
    }
}));
