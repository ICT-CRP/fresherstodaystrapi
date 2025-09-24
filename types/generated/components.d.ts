import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCompanies extends Struct.ComponentSchema {
  collectionName: 'components_shared_companies';
  info: {
    displayName: 'Companies';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
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

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedPreparationCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_preparation_cards';
  info: {
    displayName: 'Preparation Cards';
  };
  attributes: {
    buttonLink: Schema.Attribute.Text;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
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
  };
}

export interface SharedTwitter extends Struct.ComponentSchema {
  collectionName: 'components_shared_twitters';
  info: {
    displayName: 'twitter';
  };
  attributes: {
    card: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    site: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedWorkStep extends Struct.ComponentSchema {
  collectionName: 'components_shared_work_steps';
  info: {
    displayName: 'WorkStep';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    spanPosition: Schema.Attribute.String;
    spanText: Schema.Attribute.String;
    stepNumber: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.companies': SharedCompanies;
      'shared.media': SharedMedia;
      'shared.open-graph': SharedOpenGraph;
      'shared.preparation-cards': SharedPreparationCards;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.twitter': SharedTwitter;
      'shared.work-step': SharedWorkStep;
    }
  }
}
