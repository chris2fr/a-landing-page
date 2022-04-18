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
        label: 'Style (0, 1, 2, 3 ,4, 5, 6, 7, 8)',
        type: 'integer',
        min: 0,
        max: 8
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
            '@apostrophecms/image': {
              className: "a-landing-section-image"
            },
            'a-landing-image': {},
            '@apostrophecms/rich-text': {},
            'a-landing-colx2': {},
            'a-landing-colx3': {},
            '@apostrophecms/html': {},
            'a-landing-col-flow': {}
          }
        }
      }
    }
  }
};