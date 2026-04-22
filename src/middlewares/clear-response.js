module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    // 1. CHỈ chạy middleware nếu request bắt đầu bằng /api/
    // Điều này ngăn middleware can thiệp vào các trang quản trị admin
    if (!ctx.request.url.startsWith('/api/')) {
      return;
    }

    if (ctx.body && ctx.body.data) {
      const isPostRelated = /^\/api\/(posts|articles)/.test(ctx.request.url);
      const fieldsToRemove = ['createdAt', 'updatedAt', 'publishedAt'];

      // ... giữ nguyên các hàm isImage, cleanImage, processData của bạn ...
      
      const isImage = (obj) => {
        return obj && typeof obj === 'object' && 'url' in obj && 'mime' in obj;
      };

      const mapFields = (item) => ({
        id: item.id,
        url: item.url,
        width: item.width,
        height: item.height,
        provider: item.provider,
        caption: item.caption,
      });

      const cleanImage = (obj) => {
        if (Array.isArray(obj)) return obj.map(cleanImage);
        const cleaned = mapFields(obj);
        if (obj.formats) {
          cleaned.formats = {};
          for (const key in obj.formats) {
            cleaned.formats[key] = mapFields(obj.formats[key]);
          }
        }
        return cleaned;
      };

      const processData = (data) => {
        if (Array.isArray(data)) return data.map(item => processData(item));
        if (typeof data !== 'object' || data === null) return data;

        if (!isPostRelated) {
          fieldsToRemove.forEach(field => delete data[field]);
        }

        for (let key in data) {
          const value = data[key];
          if (isImage(value)) {
            data[key] = cleanImage(value);
          } else if (typeof value === 'object') {
            data[key] = processData(value);
          }
        }
        return data;
      };

      ctx.body.data = processData(ctx.body.data);
    }
  };
};