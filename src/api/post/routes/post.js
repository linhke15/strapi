"use strict";

/**
 * post router
 */

//const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter("api::post.post", {
//   prefix: "/davas",
//   only: ["find", "findOne"],
//   except: [],
//   config: {
//     find: {
//       auth: false,
//       policies: [],
//       middlewares: [],
//     },
//     findOne: {},
//     create: {},
//     update: {},
//     delete: {},
//   },
// });

export default {
  routes: [
    {
      method: "GET",
      path: "/posts/custom",
      handler: "post.customFind",
      config: {
        auth: false,
      },
    },
  ],
};
