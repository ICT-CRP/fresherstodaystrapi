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

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    displayName: 'Feature Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    header: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    keywords: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_links';
  info: {
    displayName: 'FooterLinks';
  };
  attributes: {
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
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

export interface SharedQuestions extends Struct.ComponentSchema {
  collectionName: 'components_shared_questions';
  info: {
    displayName: 'Questions';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.Text;
  };
}

export interface SharedResources extends Struct.ComponentSchema {
  collectionName: 'components_shared_resources';
  info: {
    displayName: 'Resources';
  };
  attributes: {
    document: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
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
    spanPosition: Schema.Attribute.Enumeration<
      [
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'center',
      ]
    > &
      Schema.Attribute.DefaultTo<'center'>;
    spanText: Schema.Attribute.String;
    stepNumber: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.companies': SharedCompanies;
      'shared.feature-card': SharedFeatureCard;
      'shared.footer-links': SharedFooterLinks;
      'shared.open-graph': SharedOpenGraph;
      'shared.preparation-cards': SharedPreparationCards;
      'shared.questions': SharedQuestions;
      'shared.resources': SharedResources;
      'shared.twitter': SharedTwitter;
      'shared.work-step': SharedWorkStep;
    }
  }
}
