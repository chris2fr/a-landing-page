module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Another Landing Page Section'
  },
  fields: {
    add: {
      navHeading: {
        label: 'Section Menu Heading',
        type: 'string'
      },
      identifier: {
        label: 'Section identifier',
        type: 'slug'
      },
      width: {
        label: 'Width',
        type: 'radio',
        choices: [
          {
            label: 'full-width',
            value: 'width:100%;'
          },
          {
            label: '80%',
            value: 'width:80%;margin: 0 auto;'
          }
        ]
      },
      content: {
        type: 'area',
        label: 'Section Content',
        options: {
          widgets: require('../../lib/area').bloatedConfig
        }
      }
    }
  }
};