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
      content: {
        type: 'area',
        label: 'Section Content',
        options: {
          widgets: require('../../lib/area').fullConfig
        }
      }
    }
  }
};