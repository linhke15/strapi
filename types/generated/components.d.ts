import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicZoneAbout extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    boxs: Schema.Attribute.Component<'shared.list', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneHero extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneProgram extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_programs';
  info: {
    displayName: 'Program';
  };
  attributes: {
    background: Schema.Attribute.Media<'images' | 'files'>;
    Heading: Schema.Attribute.String;
  };
}

export interface DynamicZoneTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {};
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    hasLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    link: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    content: Schema.Attribute.Text;
    info: Schema.Attribute.Component<'shared.list', true>;
    logo: Schema.Attribute.Component<'shared.logo', false>;
    text_left: Schema.Attribute.String;
    text_right: Schema.Attribute.String;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    contact: Schema.Attribute.Component<'shared.button', false>;
    logo: Schema.Attribute.Component<'shared.logo', false>;
    menu: Schema.Attribute.Component<'shared.button', true>;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'list';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files'>;
    subcontent: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'logo';
  };
  attributes: {
    link: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSoical extends Struct.ComponentSchema {
  collectionName: 'components_shared_soicals';
  info: {
    displayName: 'soical';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files', true>;
    link: Schema.Attribute.Component<'shared.button', false>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic-zone.about': DynamicZoneAbout;
      'dynamic-zone.hero': DynamicZoneHero;
      'dynamic-zone.program': DynamicZoneProgram;
      'dynamic-zone.testimonial': DynamicZoneTestimonial;
      'shared.button': SharedButton;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
      'shared.list': SharedList;
      'shared.logo': SharedLogo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.soical': SharedSoical;
    }
  }
}
