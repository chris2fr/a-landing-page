module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'A Landing Page Section'
  },
  fields: {
    add: {
      heading: {
        label: 'Section Heading',
        type: 'string'
      },
      subHeading: {
        label: 'Section Sub-Heading',
        type: 'string'
      },
      navHeading: {
        label: 'Section Menu Heading',
        type: 'string'
      },
      style: {
        label: 'Style (1, 2, 3 ,4 5, 6, 7)',
        type: 'integer',
        min: 1,
        max: 7
      },
      identifier: {
        label: 'Section identifier',
        type: 'slug'
      },
      content: {
        type: 'area',
        label: 'Section Content',
        options: {
          widgets: {
            '@apostrophecms/video': {},
            '@apostrophecms/image': {},
            '@apostrophecms/rich-text': {},
            'a-landing-page-colx2': {},
            'a-landing-page-colx3': {},
            '@apostrophecms/html': {}
          }
        }
      }
    }
  }
};