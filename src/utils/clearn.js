module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    // const excludePaths = ['/api/posts', '/api/articles/1']; // Thêm các route bạn muốn giữ lại
    // const isExcluded = excludePaths.some(path => ctx.request.url.startsWith(path));


    if (ctx.body && ctx.body.data) {
      // 1. Danh sách các trường cần xóa sạch khỏi mọi object
      const fieldsToRemove = ['createdAt', 'updatedAt', 'publishedAt'];

      // 2. Logic làm sạch ảnh riêng theo yêu cầu của bạn
      const cleanImage = (obj) => {
        if (!obj) return null;
        return {
          id: obj.id,
          url: obj.url,
          width: obj.width,
          height: obj.height,
          provider: obj.provider,
          caption: obj.caption,
        };
      };

      // 3. Logic xử lý đệ quy cho toàn bộ object data
      const processData = (data) => {
        if (Array.isArray(data)) {
          return data.map(item => processData(item));
        }

        if (typeof data === 'object' && data !== null) {
          // Xóa các trường không cần thiết trước
          fieldsToRemove.forEach(field => delete data[field]);

          // Duyệt qua các key của object
          for (let key in data) {
            // Kiểm tra nếu key là logo hoặc images và đó là object ảnh
            if ((key === 'logo' || key === 'images') && data[key] && typeof data[key] === 'object' && data[key].url) {
              data[key] = cleanImage(data[key]);
            } else {
              // Tiếp tục đệ quy cho các nhánh con
              data[key] = processData(data[key]);
            }
          }
        }
        return data;
      };

      ctx.body.data = processData(ctx.body.data);
    }
  };
};