"use strict";

/**
 * post controller
 */

export default {
    async customFind(ctx) {
        const posts = await strapi.documents("api::post.post").findMany({
            populate: {
                images: {
                    populate: "*",
                },
                cat_posts: true,
            },
        });

        const baseUrl = strapi.config.get("server.url") || "http://localhost:1337";

        const data = posts.map((p) => {
            const images = p.images
                ? [p.images.url || p.images.attributes?.url]
                    .filter(Boolean)
                    .map((url) => baseUrl + url)
                : [];

            const categories =
                p.cat_posts && p.cat_posts.length ?
                p.cat_posts.map((c) => c.name || c.attributes ?.name) : [];

            return {
                id: p.id,
                title: p.title,
                slug: p.slug,
                images,
                categories,
            };
        });

        ctx.body = data;
    },
};