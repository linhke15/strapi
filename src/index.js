"use strict";
const clearnResponse = require('./utils/clearn');
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */

  register({ strapi }) {
    // strapi.customFields.register({
    //   name: "color",
    //   plugin: "color-picker",
    //   type: "string",
    //   inputSize: {
    //     default: 4,
    //     isResizable: true,
    //   },
    // });
    strapi.log.info("Registering static configuration");
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    strapi.log.info("Bootstrap finished without awaiting tasks");
  },
};
