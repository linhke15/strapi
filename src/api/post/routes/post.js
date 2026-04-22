"use strict";

/**
 * post router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::post.post", {
  prefix: "/davas",
  only: ["find", "findOne"],
  except: [],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: ["api::post.middleware-post"],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
});
