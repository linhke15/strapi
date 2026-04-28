// src/utils/populate.js
const globalPopulate = {
    defaultSeo: {
        populate: '*'
    },
    header: {
        populate: {
            logo: {
                populate: '*'
            },
            menu: {     

                populate: '*'
            },
          
        }
    },
      footer: {
        populate: {
                logo:{
                populate: '*'
            },
            info:{
                populate: '*'
            },
            
        }
    },
     
      
}
const categoryPopulate = {
  programs: { populate: '*' },
  layout: { populate: '*' }, 
  parent: { populate: '*' },
  childrent: { populate: '*' }
};
const commoComponent = {
    button:{populate:'*'},
    seo: { populate: '*' }
}
const landingPagePopulate = {
  sections: {
    on: {
      'dynamic-zone.hero': { populate: '*' },
      'dynamic-zone.about': { populate: '*' },
      'dynamic-zone.program': { populate: '*' },
      // Thêm các component khác trong dynamic zone vào đây
    }
  }
};

module.exports = {
  globalPopulate,
landingPagePopulate,
  categoryPopulate
};