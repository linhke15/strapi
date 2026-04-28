'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    // Ép locale mặc định (Request Middleware)
    if (ctx.url.startsWith('/api/') && !ctx.query.locale) {
      ctx.query.locale = 'en';
    }

    await next();

    // RESPONSE MIDDLEWARE (Dọn dẹp dữ liệu)
    if (ctx.body && ctx.body.data && ctx.url.startsWith('/api/')) {
      const fieldsToRemove = ['createdAt', 'updatedAt', 'publishedAt', 'localizations', 'documentId'];

      const cleanImage = (obj) => {
        // Xử lý trường hợp ảnh có formats (responsive)
        const cleaned = {
          id: obj.id,
          url: obj.url,
          width: obj.width,
          height: obj.height,
          provider: obj.provider,
          caption: obj.caption,
        };
        // Nếu muốn dọn cả ảnh formats
        if (obj.formats) {
            cleaned.formats = {};
            for (let key in obj.formats) cleaned.formats[key] = cleanImage(obj.formats[key]);
        }
        return cleaned;
      };

      const processData = (data) => {
        if (!data || typeof data !== 'object') return data;
        if (Array.isArray(data)) return data.map(item => processData(item));

        // Nếu có 'attributes', nhảy vào đó để xử lý (Chuẩn Strapi)
        if (data.attributes) {
            Object.assign(data, data.attributes);
            delete data.attributes;
        }

        // Xóa field rác
        fieldsToRemove.forEach(field => delete data[field]);

        for (let key in data) {
          const value = data[key];
          
          // Tự động nhận diện ảnh (có url và mime) thay vì check tên key cứng nhắc
          if (value && typeof value === 'object' && value.url && value.mime) {
            data[key] = cleanImage(value);
          } else {
            data[key] = processData(value);
          }
        }
        return data;
      };

      ctx.body.data = processData(ctx.body.data);
    }
  };
};